const {v4: uuidv4} = require('uuid');
const {addAttendee, createMeeting} = require('./chime-methods');

const run = async () => {
  const requestId = uuidv4();
  const meeting = await createMeeting(requestId);
  const meetingId = meeting.Meeting.MeetingId;

  const externalUserId = uuidv4();
  const attendee = await addAttendee(meetingId, externalUserId);
  const attendeeId = attendee.Attendee.AttendeeId;
};

run();
