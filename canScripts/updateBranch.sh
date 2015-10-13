 #!/bin/bash

 cd /opt/mean;
 sudo pm2 stop grunt;
 sudo git checkout server-deployment;
 sudo git commit -m "update from commit";
 sudo git push;
 sudo pm2 start grunt;
echo "GITHUB BRANCH UPDATE COMPLETE";
