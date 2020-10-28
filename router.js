const express = require('express');
const router = express.Router();

const {addAttendee, createMeeting} = require('./service');

router.get('/', (req, res) => {
  res.send('Hello, world!');
});

router.post('/attendees', async (req, res) => {
  const {meetingId} = req.body;
  const newAttendee = await addAttendee(meetingId);
  res.json({attendee: {id: newAttendee.Attendee.AttendeeId}});
});

router.post('/meetings', async (req, res) => {
  const newMeeting = await createMeeting();
  res.json({meeting: {id: newMeeting.Meeting.MeetingId}});
});

module.exports = router;
