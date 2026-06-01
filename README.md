Architecture:

 User → CloudFront → S3 (React)
                  ↘
            API Gateway → Lambda (Express API) → Database
            
  Order: You said frontend first, then backend. Just remember to rebuild and re-upload the frontend after deploying
  the backend so it has the real API URL.
