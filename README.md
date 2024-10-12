# mini_micro_service_app

PORT - SERVICES
=================
4000 - Posts
4001 - Comments
4002 - Query
4003 - Moderation
4005 - Event bus


Client => Post/Comments/Query => Event_Bus => Post/Comments/Query => Client

Comments are moderated by moderations service.

Run all the 6 services to see things in actions and flow.