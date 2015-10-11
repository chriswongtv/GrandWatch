 #!/bin/bash

 cd /opt/mean;
 sudo git checkout server-deployment;
 sudo git fetch origin;
 sudo git pull;
echo "GITHUB SERVER DEPLOYMENT COMPLETE";
