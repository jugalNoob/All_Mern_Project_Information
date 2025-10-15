
12. CDN (Content Delivery Network)

Definition: A network of servers distributed globally to deliver content faster.

Use Case: Streaming videos, loading images on websites faster
 (like Cloudflare or Akamai).

 🌐 Custom CDN Design (Step-by-Step)

 | Component                  | Description                                                               |
| -------------------------- | ------------------------------------------------------------------------- |
| **Origin Server**          | Central server storing original content (images, videos, JS, CSS).        |
| **Edge Servers / PoPs**    | Distributed servers near users to cache static content and serve quickly. |
| **Load Balancer / DNS**    | Routes user requests to the nearest or least-loaded edge server.          |
| **Cache**                  | Stored content at edge; can use TTL (Time-to-Live) for freshness.         |
| **Invalidation Mechanism** | Updates or removes stale content from caches when origin changes.         |



2️⃣ Flow

User requests content (image.jpg).

DNS / Load balancer routes request to nearest edge server.

Edge server checks cache:

✅ If content exists → Serve from cache (fast).

❌ If not → Fetch from origin server, store in cache, then serve.

Optional: Cache expires after TTL or is invalidated by origin update.

3️⃣ Benefits

Reduced Latency: User gets content from nearest server.

High Availability: Even if origin fails, edge servers can serve cached content.

Scalable: Handles high traffic spikes without hitting origin server.


                 +----------------+
                 |   Origin Server |
                 |  (Central Repo)|
                 +--------+-------+
                          |
           -------------------------------
           |              |              |
+----------------+ +----------------+ +----------------+
| Edge Server US | | Edge Server EU | | Edge Server AS |
+--------+-------+ +--------+-------+ +--------+-------+
         |                  |                 |
      Users in US        Users in EU      Users in AS



      Legend:

Users are served by the nearest edge server.

Edge server caches content from origin.

TTL / invalidation keeps cache fresh.

5️⃣ Optional Advanced Features

Anycast IP: Same IP announced from multiple locations → automatic nearest routing.

Compression: gzip / brotli for faster transfer.

HTTPS Termination at Edge: Reduce load on origin.

Analytics: Track cache hit/miss rates, latency per region.

🌐 Advanced Custom CDN Design (Static + Dynamic Content)
1️⃣ Components

| Component                 | Description                                                                                        |
| ------------------------- | -------------------------------------------------------------------------------------------------- |
| **Origin Server**         | Central repository of all content (static + dynamic).                                              |
| **Edge Servers / PoPs**   | Distributed caching servers near users. Handle static content caching and dynamic content routing. |
| **Load Balancer / DNS**   | Routes user requests to nearest edge server. Can also route dynamic requests to origin.            |
| **Cache**                 | Stores static content with TTL; dynamic content may be partially cached (e.g., API responses).     |
| **Cache Invalidation**    | Mechanism to remove stale cached content.                                                          |
| **Dynamic Routing Layer** | Detects dynamic requests (e.g., user-specific API) and forwards to origin or app servers.          |



2️⃣ Flow
Static Content (Images, CSS, JS)

User requests /image.jpg.

Request routed to nearest edge server via DNS/load balancer.

Edge server checks cache:

✅ If cached → Serve immediately.

❌ If not → Fetch from origin, cache, then serve.

Dynamic Content (API, Personalized Data)

User requests /user/profile.

Request routed to dynamic routing layer.

Edge server may optionally cache short-lived data (e.g., 10s–1min).

Forward to origin app server if cache miss.

3️⃣ Benefits

Static content served fast from nearest edge.

Dynamic content handled efficiently with optional caching.

Reduces load on origin servers, improves latency and scalability.

                 +----------------+
                 |   Origin Server |
                 |  (Static + API)|
                 +--------+-------+
                          |
                +---------+----------+
                | Dynamic Routing /  |
                | Edge Cache Layer   |
                +---------+----------+
                          |
           -----------------------------------
           |               |               |
+----------------+ +----------------+ +----------------+
| Edge Server US | | Edge Server EU | | Edge Server AS |
| (Static Cache) | | (Static Cache) | | (Static Cache) |
+--------+-------+ +--------+-------+ +--------+-------+
         |                  |                 |
      Users in US        Users in EU      Users in AS

                       +----------------+
                 |   Origin Server |
                 |  (Static + API)|
                 +--------+-------+
                          |
                +---------+----------+
                | Dynamic Routing /  |
                | Edge Cache Layer   |
                +---------+----------+
                          |
           -----------------------------------
           |               |               |
+----------------+ +----------------+ +----------------+
| Edge Server US | | Edge Server EU | | Edge Server AS |
| (Static Cache) | | (Static Cache) | | (Static Cache) |
+--------+-------+ +--------+-------+ +--------+-------+
         |                  |                 |
      Users in US        Users in EU      Users in AS


5️⃣ Flow
Static Content

User requests /image.jpg.

Request routed to nearest edge server.

Edge server checks cache:

✅ Cache hit → Serve directly.

❌ Cache miss → Fetch from origin, cache it, serve user.



Dynamic Content

User requests /user/profile.

Request routed to dynamic routing layer.

Edge may cache short-lived response (10s–1min).

Cache miss → Forward to origin server.

      Notes:

Static content: Cached at edge, TTL applied.

Dynamic content: Routed to origin; optional short-term caching.

All users are served from nearest edge, reducing latency.

5️⃣ Interview Talking Points

Explain static vs dynamic content handling.

Discuss cache invalidation strategy for both types.

Mention load balancing & failover for high availability.

Optional: Talk about compression, HTTPS termination, and analytics.


6️⃣ Cache Strategy

| Type         | TTL / Policy          | Notes                                   |
| ------------ | --------------------- | --------------------------------------- |
| Static       | Long TTL (1h–24h)     | Frequent reuse, low change rate         |
| Dynamic      | Short TTL (10s–1min)  | Optional caching for hot API endpoints  |
| Invalidation | Manual / Event-driven | On content update, purge cache at edges |


7️⃣ Performance & Scaling

| Metric                | Estimate / Strategy                                 |
| --------------------- | --------------------------------------------------- |
| Latency reduction     | ~50–90% (users served from nearest edge)            |
| Traffic handling      | Millions of requests per minute across global edges |
| Cache hit ratio       | Aim: 70–90% for static content                      |
| Origin load reduction | Reduced by cache hits → fewer direct requests       |


8️⃣ Additional Enhancements

Compression: gzip or brotli for faster transfers.


                  www.myshop.com
                          |
                          v
               +----------------------+
               |     DNS / CDN        |
               |  Geo-routing layer   |
               +----------------------+
              /           |           \
             /            |            \
            v             v             v
+----------------+ +----------------+ +----------------+
| Edge Server US | | Edge Server EU | | Edge Server AS |
| (Cache static) | | (Cache static) | | (Cache static) |
+--------+-------+ +--------+-------+ +--------+-------+
         |                  |                 |
     Users in US        Users in EU      Users in Asia
         |                  |                 |
         v                  v                 v
+----------------+ +----------------+ +----------------+
| Origin Server US | | Origin Server EU | | Origin Server AS |
| (Dynamic/API)   | | (Dynamic/API)   | | (Dynamic/API)   |
+----------------+ +----------------+ +----------------+


