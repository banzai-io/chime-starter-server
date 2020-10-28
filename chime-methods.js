const AWS = require('aws-sdk');

const chime = new AWS.Chime({region: 'us-east-1'});
chime.endpoint = new AWS.Endpoint('https://service.chime.aws.amazon.com');

const MEDIA_PLACEMENT_REGION = 'us-west-2';
const region = MEDIA_PLACEMENT_REGION;

async function addAttendee(meetingId, externalId) {
  try {
    const attendee = await chime
      .createAttendee({
        MeetingId: meetingId,
        ExternalUserId: externalId,
      })
      .promise();
    return attendee;
  } catch (err) {
    // handle error - you can retry with the same external id
    console.log('Error on creating meeting:', err);
    return null;
  }
  return attendee;
}

async function createMeeting(requestId) {
  try {
    const meeting = await chime
      .createMeeting({
        ClientRequestToken: requestId,
        MediaRegion: region,
      })
      .promise();
    return meeting;
  } catch (err) {
    console.log('Error on creating meeting:', err);
    // handle error - you can retry with the same requestId
    return null;
  }
}

module.exports = {addAttendee, createMeeting};
