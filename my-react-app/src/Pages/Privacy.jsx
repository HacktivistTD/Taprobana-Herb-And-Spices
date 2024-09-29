import React from 'react';

const Privacy = () => {
  return (
    <div className="p-8 bg-gray-900 min-h-screen text-gray-200">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-white mb-4">Deploy Faster</h1>
        <h2 className="text-5xl font-bold text-white mb-12">Everything you need to deploy your app.</h2>

        {/* Main Layout Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Push to Deploy Card */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Push to Deploy</h3>
            <ul className="space-y-4">
              <li>Integrate with Git to automatically deploy on push.</li>
              <li>Generate private links for test environments.</li>
              <li>Multiple cloud providers supported.</li>
            </ul>
          </div>

          {/* Connect Your Favorite Tools Card */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Connect Your Favorite Tools</h3>
            <p>Seamlessly connect with Slack, Jira, and more to track and manage your deployments.</p>
          </div>

          {/* Advanced Access Control Card */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Advanced Access Control</h3>
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/50"
                alt="User Avatar"
                className="rounded-full"
              />
              <div>
                <p>John Doe</p>
                <p>Administrator</p>
              </div>
            </div>
          </div>

          {/* Lightning Fast Builds Card */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Lightning-Fast Builds</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold">405</p>
                <p>Builds</p>
              </div>
              <div>
                <p className="text-3xl font-bold">3.65</p>
                <p>Avg. Speed</p>
              </div>
              <div>
                <p className="text-3xl font-bold">3</p>
                <p>Deployments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
