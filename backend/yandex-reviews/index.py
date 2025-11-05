import json
import os
from typing import Dict, Any
import urllib.request
import urllib.parse

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Получение отзывов организации с Яндекс Карт
    Args: event - dict with httpMethod, queryStringParameters (org_id)
          context - object with attributes: request_id, function_name
    Returns: HTTP response dict with reviews data
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'GET':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    api_key = os.environ.get('YANDEX_MAPS_API_KEY')
    if not api_key:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'API key not configured'}),
            'isBase64Encoded': False
        }
    
    params = event.get('queryStringParameters', {})
    org_id = params.get('org_id', 'f2ca097c-5b35-4a50-9505-910a158d519b')
    
    url = f'https://search-maps.yandex.ru/v1/?apikey={api_key}&text={org_id}&type=biz&lang=ru_RU&results=1'
    
    try:
        with urllib.request.urlopen(url) as response:
            data = json.loads(response.read().decode())
            
            if 'features' not in data or len(data['features']) == 0:
                return {
                    'statusCode': 404,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'body': json.dumps({'error': 'Organization not found'}),
                    'isBase64Encoded': False
                }
            
            org_data = data['features'][0]['properties']['CompanyMetaData']
            
            reviews_data = {
                'rating': org_data.get('rating', 0),
                'reviews_count': org_data.get('reviews_count', 0),
                'name': org_data.get('name', ''),
                'address': org_data.get('address', ''),
                'url': org_data.get('url', ''),
                'reviews': []
            }
            
            if 'reviews' in org_data:
                for review in org_data['reviews'][:10]:
                    reviews_data['reviews'].append({
                        'author': review.get('author', {}).get('name', 'Аноним'),
                        'rating': review.get('rating', 0),
                        'text': review.get('text', ''),
                        'date': review.get('updatedAt', '')
                    })
            
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps(reviews_data, ensure_ascii=False),
                'isBase64Encoded': False
            }
            
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': str(e)}),
            'isBase64Encoded': False
        }
