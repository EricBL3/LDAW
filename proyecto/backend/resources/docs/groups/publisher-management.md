# Publisher management

APIs for managing publishers.

## Get publisher.

<small class="badge badge-darkred">requires authentication</small>

This endpoint allows you to retrive all the publishers in the system.

> Example request:

```javascript
const url = new URL(
    "http://localhost:8000/api/publisher/getPublisher"
);

let headers = {
    "Authorization": "Bearer JWT_token",
    "Content-Type": "application/json",
    "Accept": "application/json",
};


fetch(url, {
    method: "GET",
    headers,
}).then(response => response.json());
```


> Example response (200):

```json
[
    {
        "idPublisher": 1,
        "nombrePublisher": "Nintendo"
    },
    {
        "idPublisher": 2,
        "nombrePublisher": "2k"
    },
    {
        "idPublisher": 3,
        "nombrePublisher": "Bungie"
    },
    {
        "idPublisher": 4,
        "nombrePublisher": "Microsoft"
    },
    {
        "idPublisher": 5,
        "nombrePublisher": "Activision Blizzard"
    },
    {
        "idPublisher": 6,
        "nombrePublisher": "Electronic Arts"
    },
    {
        "idPublisher": 7,
        "nombrePublisher": "Sony"
    },
    {
        "idPublisher": 8,
        "nombrePublisher": "SEGA"
    },
    {
        "idPublisher": 9,
        "nombrePublisher": "Bioware"
    },
    {
        "idPublisher": 10,
        "nombrePublisher": "Ubisoft"
    },
    {
        "idPublisher": 11,
        "nombrePublisher": "Capcom"
    },
    {
        "idPublisher": 12,
        "nombrePublisher": "Bandai Namco"
    },
    {
        "idPublisher": 13,
        "nombrePublisher": "Mojang"
    }
]
```
<div id="execution-results-GETapi-publisher-getPublisher" hidden>
    <blockquote>Received response<span id="execution-response-status-GETapi-publisher-getPublisher"></span>:</blockquote>
    <pre class="json"><code id="execution-response-content-GETapi-publisher-getPublisher"></code></pre>
</div>
<div id="execution-error-GETapi-publisher-getPublisher" hidden>
    <blockquote>Request failed with error:</blockquote>
    <pre><code id="execution-error-message-GETapi-publisher-getPublisher"></code></pre>
</div>
<form id="form-GETapi-publisher-getPublisher" data-method="GET" data-path="api/publisher/getPublisher" data-authed="1" data-hasfiles="0" data-headers='{"Authorization":"Bearer JWT_token","Content-Type":"application\/json","Accept":"application\/json"}' onsubmit="event.preventDefault(); executeTryOut('GETapi-publisher-getPublisher', this);">
<h3>
    Request&nbsp;&nbsp;&nbsp;
    </h3>
<p>
<small class="badge badge-green">GET</small>
 <b><code>api/publisher/getPublisher</code></b>
</p>
<p>
<label id="auth-GETapi-publisher-getPublisher" hidden>Authorization header: <b><code></code></b><input type="text" name="Authorization" data-prefix="" data-endpoint="GETapi-publisher-getPublisher" data-component="header"></label>
</p>
</form>



