const API_BASE = 'https://www.googleapis.com/youtube/v3'

function getApiKey() {
  return import.meta.env.VITE_YT_API_KEY
}

export async function fetchPlaylistVideos(playlistId, maxResults = 12) {
  const key = getApiKey()
  if (!key) throw new Error('Missing VITE_YT_API_KEY')

  const url = new URL(`${API_BASE}/playlistItems`)
  url.searchParams.set('part', 'snippet,contentDetails')
  url.searchParams.set('maxResults', String(maxResults))
  url.searchParams.set('playlistId', playlistId)
  url.searchParams.set('key', key)

  const res = await fetch(url.toString())
  if (!res.ok) throw new Error('Failed to load playlist')
  const data = await res.json()
  return (data.items || []).map(item => ({
    id: item.contentDetails?.videoId,
    title: item.snippet?.title,
    thumbnail: item.snippet?.thumbnails?.high?.url || item.snippet?.thumbnails?.default?.url
  })).filter(v => v.id)
}
