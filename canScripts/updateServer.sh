 #!/bin/bash

 cd /opt/mean;
 sudo pm2 stop grunt;
 sudo git checkout server-deployment;
 sudo git fetch origin;
 sudo git pull;
 sudo pm2 start grunt;
echo "GITHUB SERVER DEPLOYMENT COMPLETE";
