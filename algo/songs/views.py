from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
@api_view(["POST"])
def recommend(request):
  print(request.data)
  response = {
  }
  return Response(response, status=status.HTTP_200_OK)