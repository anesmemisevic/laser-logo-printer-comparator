# laser-logo-printer-comparator
Playing with laser pointers and logos' similarity checks

## Running:
  - ✗ node app.js
## Testing:
  - Inputs and expected outputs located in advanced/base_cases folders
  
  
## Some output samples:

```
LOGO logo1 RRDLDLDRRRUURDDLRRUURDDLRRUURDURDD
logo1 defined
ENGRAVE logo1 2 1
. . . . . . . . . . .
                     
.-.-. . . . . . . . .
    |                
. .-. .-. .-. .-.-. .
  |   | | | | | | |  
.-. . . . . . . . . .
|     | | | | |   |  
.-.-.-.-.-.-.-. . . .
                     
. . . . . . . . . . .
                     
. . . . . . . . . . .
                     
. . . . . . . . . . .
                     
. . . . . . . . . . .
                     
. . . . . . . . . . .
                     
. . . . . . . . . . .
LOGO logo2 LLDDRRLLDDRRRUUUUDDRDDLRRUURDDLRUUDDRUUDDDDL
logo2 defined
ENGRAVE logo2 1 5
. . .-.-. . . . . . .
    |     |          
. . . . . . . . . . .
    |     |          
. . .-.-. .-. .-. . .
    |     | | | | |  
. . . . . . . . . . .
    |     | | | | |  
. . .-.-.-.-.-.-.-. .
                  |  
. . . . . . . . . . .
                  |  
. . . . . . . . .-. .
                     
. . . . . . . . . . .
                     
. . . . . . . . . . .
                     
. . . . . . . . . . .
                     
. . . . . . . . . . .

```
---------------------------------  

```
LOGO logo1 LLLLURRRUUULLLURRRRDDDDDRRRRULLLUUURRRULLLL
logo1 defined
ENGRAVE logo1 7 7
. . . . . . . . . . .
                     
. . .-.-.-.-.-.-.-.-.
    |       |       |
. . .-.-.-. . .-.-.-.
          | | |      
. . . . . . . . . . .
          | | |      
. . . . . . . . . . .
          | | |      
. . .-.-.-. . .-.-.-.
    |       |       |
. . .-.-.-.-.-.-.-.-.
                     
. . . . . . . . . . .
                     
. . . . . . . . . . .
                     
. . . . . . . . . . .
                     
. . . . . . . . . . .
LOGO logo2 RRRRRUUUULDDDLLLUUULDDDDDDDDRUUURRRDDDRUUUU
logo2 defined
ENGRAVE logo2 7 4
. . . . . . . . . . .
                     
. . . . . . . . . . .
                     
. . . .-. . . .-. . .
      | |     | |    
. . . . . . . . . . .
      | |     | |    
. . . . . . . . . . .
      | |     | |    
. . . . .-.-.-. . . .
      |         |    
. . . .-.-.-.-.-. . .
      |         |    
. . . . .-.-.-. . . .
      | |     | |    
. . . . . . . . . . .
      | |     | |    
. . . . . . . . . . .
      | |     | |    
. . . .-. . . .-. . .
SAME logo1 logo2
Yes
```