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


ingress-nginx
----------------
https://kubernetes.github.io/ingress-nginx/deploy/

To add localhost url
--------------------
Windows -> C:\Windows\System32\drivers\etc
Linus -> /etc/hosts


SKAFFOLD
-----------
https://chocolatey.org/install
https://skaffold.dev/docs/install/
