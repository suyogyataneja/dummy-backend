Architecture:

 User → CloudFront → S3 (React)
                  ↘
            API Gateway → Lambda (Express API) → Database
            
  Order: Rebuild and re-upload the frontend after deploying
  the backend so it has the real API URL.
