const {v4: uuidv4} = require('uuid');
const {
  addAttendee: chimeAddAttendee,
  createMeeting: chimeCreateMeeting,
} = require('./chime-methods');

async function createMeeting() {
  const requestId = uuidv4();
  const meeting = await chimeCreateMeeting(requestId);
  //const meetingId = meeting.Meeting.MeetingId;
  return meeting;
}

async function addAttendee(meetingId) {
  const externalUserId = uuidv4();
  const attendee = await chimeAddAttendee(meetingId, externalUserId);
  //const attendeeId = attendee.Attendee.AttendeeId;
  return attendee;
}

module.exports = {addAttendee, createMeeting};
