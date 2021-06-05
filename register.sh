ENDPOINT_URL=https://DOOTDOOTDOOT.execute-api.us-west-2.amazonaws.com/Prod/register/
NAME="Adam Ulvi"
EMAIL="adam@20lbs.net"

curl -X POST ${ENDPOINT_URL}  \
-H "Content-Type: application/json"  \
-d "{\"name\":\"${NAME}\",\"email\":\"${EMAIL}\"}"
