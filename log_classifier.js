// // Step 1: set your neural network options
// const options = {
//     dataUrl: "apache_logs.json",
//     task: 'classification',
//     debug: true
//   }

const data = [
    {
        "text": "196.195.117.127 - - [26/Oct/2020:11:40:58 -0700] \"GET /posts/posts/explore HTTP/1.0\" 200 5042 \"http://moore.com/home.php\" \"Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_12_2; rv:1.9.6.20) Gecko/2020-09-10 11:13:54 Firefox/3.8\"\n",
        "log_type": "apache"
    },
    {
        "text": "5.118.140.189 - - [26/Oct/2020:11:44:00 -0700] \"GET /explore HTTP/1.0\" 200 5013 \"https://www.dixon.com/about.htm\" \"Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/3.1)\"\n",
        "log_type": "apache"
    },
    {
        "text": "184.251.150.74 - - [26/Oct/2020:11:48:51 -0700] \"GET /app/main/posts HTTP/1.0\" 200 5011 \"https://www.greene-wilson.com/\" \"Mozilla/5.0 (Android 2.0.1; Mobile; rv:58.0) Gecko/58.0 Firefox/58.0\"\n",
        "log_type": "apache"
    },
    {
        "text": "140.237.8.54 - - [26/Oct/2020:11:51:33 -0700] \"GET /posts/posts/explore HTTP/1.0\" 200 4929 \"http://morales-washington.info/search.php\" \"Mozilla/5.0 (X11; Linux i686; rv:1.9.5.20) Gecko/2010-03-28 09:43:30 Firefox/3.8\"\n",
        "log_type": "apache"
    },
    {
        "text": "38.180.5.208 - - [26/Oct/2020:11:52:03 -0700] \"PUT /search/tag/list HTTP/1.0\" 200 4999 \"https://mcclure.com/\" \"Mozilla/5.0 (Android 3.2.2; Mobile; rv:7.0) Gecko/7.0 Firefox/7.0\"\n",
        "log_type": "apache"
    },
    {
        "text": "171.69.186.83 - - [26/Oct/2020:11:55:06 -0700] \"DELETE /explore HTTP/1.0\" 200 5000 \"https://sanders-roberson.net/search.php\" \"Mozilla/5.0 (compatible; MSIE 7.0; Windows 98; Win 9x 4.90; Trident/4.0)\"\n",
        "log_type": "apache"
    }]

// Step 2: set your neural network options
const options = {
    task: 'classification',
    debug: true
  }

// Step 3: initialize your neural network
const nn = ml5.neuralNetwork(options);


// Step 4: add data to the neural network
data.forEach(item => {
    const inputs = {
      text: item.text, 
    };
    const output = {
      color: item.log_type
    };
  
    nn.addData(inputs, output);
  });
  