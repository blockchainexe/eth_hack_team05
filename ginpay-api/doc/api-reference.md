# ginpay APIドキュメント

## 旅先一覧取得API

### method
GET

### URL
/api/destinations

### response

status code 200

```
[
  {
    'destination_id': 1,
    'name': '北海道',
    'image': 's3 url',
    'point': '0.12',
    'description': '毎年、8月初旬に三浦市は三浦海岸納涼まつり花火大会を開催する。　夏の太陽が沈んだ後、3000発の花火が打ち上げられると夜空は輝きで彩られる。　夏祭りを満喫するのに欠かせないもの全てがここで楽しめる―太陽、砂浜、夜店の食べ物、綺麗な浴衣、そして花火。'
  },
  {
    'destination_id': 2,
    'name': '青森',
    'image': 's3 url',
    'point': '0.12',
    'description': '毎年、8月初旬に三浦市は三浦海岸納涼まつり花火大会を開催する。　夏の太陽が沈んだ後、3000発の花火が打ち上げられると夜空は輝きで彩られる。　夏祭りを満喫するのに欠かせないもの全てがここで楽しめる―太陽、砂浜、夜店の食べ物、綺麗な浴衣、そして花火。'
  }
]
```

## リクエスト一覧取得API

### method
GET

### URL
/api/requests

### response

status code 200

```
[
  {
    'user_id': '1qwertyutrdfvbnjki87tghu654e',
    'user_name': '山田太郎',
    'image': 'hoge',
    'destination_id': 1,
    'message': '北海道の大自然に触れたい'
  },
  {
    'user_id': '1qwertyutrdfvbnjki87tghu654e',
    'user_name': '山田花子',
    'image': 'hoge',
    'destination_id': 2,
    'message': '日本のクラブに行ってみたい'
  }
]
```

## ユーザー情報取得API
 
### method
GET
 
### URL
/api/user?user_id=1qwertyutrdfvbnjki87tghu654e

### response

status code 200

```
{
  'user_id': '1qwertyutrdfvbnjki87tghu654e',
  'user_name': '山田太郎',
  'image': 'hoge',
  'point': '100.0'
}
```

## リクエストAPI

### method
POST

### HEADERS
Content-Type: application/json

### URL
/api/request

### request body

```
{
  'user_id': '1qwertyutrdfvbnjki87tghu654e',
  'destination_id': 1, 
  'message': '北海道の大自然に触れたい'
}
```

### response

status code 200
```
{
  'status': 'success'
}
```
status code 400
```
 {
   'error_code': 1
 }
 ```

## ユーザー情報登録API
 
### method
POST

### HEADERS
Content-Type: application/json

### URL
/api/user

### request body

```
{
 'user_id': '1qwertyutrdfvbnjki87tghu654e',
 'user_name': '山田太郎',
 'image': 'hoge',
 'point': '100.0'
}
```

### response

status code 200
```
{
 'status': 'success'
}
```
status code 400
```
{
  'error_code': 1
}
```  
  
## チャットメッセージAPI
 
### method
POST

### HEADERS
Content-Type: application/json

### URL
/api/message

### request body

```
{
  'user_id': '1qwertyutrdfvbnjki87tghu654e',
  'message': 'こんにちは'
}
```

### response

status code 200
```
{
  'status': 'success'
}
```
status code 400
 ```
{
　　'error_code': 1
}
```
  
## 旅行先評価
   
### method
POST

### HEADERS
Content-Type: application/json

### URL
/api/evaluation

### request body

```
{
 'user_id': '1qwertyutrdfvbnjki87tghu654e',
 'recommender_id': '1qwertyutejijfqyr831yrf8rf',
 'evaluation': '5'
}
```

### response

status code 200
```
{
 'status': 'success'
}
```
status code 400
```
{
  'error_code': 1
}
```  