import React, { useState, useEffect } from 'react';

const GogTokenPage = () => {
  const [accessToken, setAccessToken] = useState('');

  const handleLogin = async () => {
    const clientId = '46899977096215655';
    const redirectUri = 'https://embed.gog.com/on_login_success?origin=client';
    const authUrl = `https://auth.gog.com/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token`;

    window.location.href = authUrl;
  };

  // Extract access token from URL hash when redirected back from GOG
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const accessToken = params.get('access_token');
    setAccessToken(accessToken);
  }, []);

  return (
    <div>
      {accessToken ? (
        <div>
          <p>Access Token: {accessToken}</p>
          {/* Add logic to use the access token for API requests */}
        </div>
      ) : (
        <button onClick={handleLogin}>Login with GOG</button>
      )}
    </div>
  );
};

export default GogTokenPage;