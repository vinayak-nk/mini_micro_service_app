# mini_micro_service_app

PORT - SERVICES
=================
4000 - Posts
4001 - Comments
4002 - Query
4003 - Moderation
4005 - Event bus


Client => Post/Comments/Query => Event_Bus => Post/Comments/Query => Client


docker build -t vinaayak/posts .
docker push vinaayak/posts


k get pods
k get services
k get deployments

k apply -f {filename}.yaml

k rollout restart deployments posts-deploy


# ingress-nginx
----------------
https://kubernetes.github.io/ingress-nginx/deploy/
```
Check port 80 -> powershell as admin -> netstat -anb -> scroll to the top and check.

  Active Connections

    Proto  Local Address          Foreign Address        State
    TCP    0.0.0.0:80             0.0.0.0:0              LISTENING
  [com.docker.backend.exe]
```

#  To add localhost url
```
  --------------------
  Windows -> C:\Windows\System32\drivers\etc -> hosts file
  Linus -> /etc/hosts

  127.0.0.1 posts.com
  127.0.0.1 ticketing.dev

```

# SKAFFOLD
  https://chocolatey.org/install
  https://skaffold.dev/docs/install/

  > skaffold fix -> to upgrade skafold config

  > skaffold dev


# port - node port
# targetPort - pod port
