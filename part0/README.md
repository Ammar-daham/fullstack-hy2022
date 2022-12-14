# 0.4: New note diagram

### Submitting new notes causes five HTTP requests:

* The first one is the form submit event using HTTP POST 
https://studies.cs.helsinki.fi/exampleapp/new_note

* The second one is sending HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes 

* The third one is sending HTTP GET 
https://studies.cs.helsinki.fi/exampleapp/main.css

* The fourth is sending HTTP GET
https://studies.cs.helsinki.fi/exampleapp/main.js

* The fifth is sending HTTP GET 
HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json

The sequence diagram below demonstrate the requests:



   ![Post_request (1)](https://user-images.githubusercontent.com/32091211/207472902-917b9e96-0ddb-4793-8130-d24b33307bd3.png)


____
# 0.5: Single page app diagram

### Rendering single page app causes 4 HTTP requests: 


* The first one is sending HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa 

* The second is sending HTTP GET 
https://studies.cs.helsinki.fi/exampleapp/main.css

* The third is sending HTTP GET
https://studies.cs.helsinki.fi/exampleapp/spa.js

* The forth is sending HTTP GET 
HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json

The sequence diagram below demonstrate the requests:


   ![Post_request (3)](https://user-images.githubusercontent.com/32091211/207722291-22be1ed2-faf2-4b4e-9853-7bdff4da4649.png)

   

____

# 0.6: New note in Single page app diagram

### The browser will only send one POST HTTP request to the server and the response will be 201 with message {"message":"note created"}.
The sequence diagram below demonstrate the request:


   ![Post_request (2)](https://user-images.githubusercontent.com/32091211/207720262-8289c2db-5e88-4ed8-a52c-4a38363ed6cd.png)



