/* script starts here */
class Script {
    /**
     * @params {object} request
     */
    process_incoming_request(request) {
        const data = request.content;
        try {
            // request.url.hash
            // request.url.search
            // request.url.query
            // request.url.pathname
            // request.url.path
            // request.url_raw
            // request.url_params
            // request.headers
            // request.user._id
            // request.user.name
            // request.user.username
            // request.content_raw
            // request.content

            const retObj = {
                content: {
                    text: "```\n" + JSON.stringify(data) + "\n```"

                }
            };

            // console is a global helper to improve debug
            console.log(JSON.stringify(retObj));

            return retObj;

        } catch (e) {
            console.log('webhook error', e);
            // return {
            //   error: {
            //     success: false,
            //     message: 'Error example'
            //   }
            // };
            return {
                error: {
                    success: false,
                    message: `${e.message || e} ${JSON.stringify(data)}`
                }
            };
        }
    };


}
/* script ends here */

/*define payload*/

var request = {
    content: {
        "text": "Example message",
        "attachments": [
            {
                "title": "Rocket.Chat",
                "title_link": "https://rocket.chat",
                "text": "Rocket.Chat, the best open source chat",
                "image_url": "http://localhost:3000/images/integration-attachment-example.png",
                "color": "#764FA5"
            }
        ]
    }
};

console.log("=== json object ===");
console.log(request.content);

/*test code admitting you called Script*/

console.log("=== execute script ===");
const response = (new Script()).process_incoming_request(request);

console.log("=== response ===");
console.log(response);
