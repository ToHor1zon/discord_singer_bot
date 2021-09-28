// Controller Function to get meta details from Youtube Url
export default async (req, res) => {
  try {
      const { url } = req.query
      const videoId = ytdl.getURLVideoID(url)

      const videoInfo = await ytdl.getInfo(videoId)
      const { thumbnail, author, title } = videoInfo.videoDetails

      return res.status(200).json({
          success: true,
          data: {
              thumbnail: thumbnail['thumbnails'][0].url || null,
              videoId,
              author: author ? author['name'] : null,
              title
          }
      })

  } catch (error) {
      console.log(`error --->`, error);
      return res.status(500).json({ success: false, msg: "Failed to get video info" })
  }
}