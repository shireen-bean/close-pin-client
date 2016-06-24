curl --include --request POST http://localhost:3000/profiles \
--header "Content-Type: application/json" \
--header "authToken: 3d4e208034dd3e3a13852850d7edb719" \
--data '{
    "profile": {
        "given_name": "name",
        "surname": "brand",
        "gender": "red",
        "description": "hi",
        "picture": "rha",
        "user_id": "2"
    }
}'


--header "authToken: 349ab29a-xtab-423b-a5hc-5623bc39b8c8"
