

class Script {
  /**
   * @params {object} request
   */
  process_incoming_request({ request }) {
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
          text: "```\n"+ JSON.stringify(data)+"\n```"

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
