// src/api/send-to-discord.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  // Set CORS headers first
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS request
  if (request.method === 'OPTIONS') {
    return response.status(200).end();
  }

  // Handle POST request
  if (request.method === 'POST') {
    try {
      const { gameName, gameDesc, gameType, gameURL } = request.body;

      // Send the event data to the specified endpoint
      const apiResponse = await fetch('https://ping-pal-six-vercel.app/api/v1/events', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer cm331jdz30001bbqy4xexsbe8',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          category: 'bug',
          fields: {
            game_name: gameName,
            game_desc: gameDesc,
            game_type: gameType,
            game_url: gameURL,
          },
        }),
      });

      // Handle response from the API
      if (!apiResponse.ok) {
        throw new Error(`Error: ${apiResponse.status}`);
      }

      return response.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending event:', error);
      return response.status(500).json({ error: 'Failed to send event' });
    }
  }

  return response.status(405).json({ error: 'Method not allowed' });
}
