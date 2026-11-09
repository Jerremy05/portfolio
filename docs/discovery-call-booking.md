# Google Calendar discovery-call booking

The `DiscoveryCall` component appears above the FAQs and email form on both Home and `/contact` once `discoveryCall.url` in `src/content/contact.ts` contains a valid public Google appointment-schedule link. The empty default keeps unfinished booking UI hidden.

## Connect real availability

1. In Google Calendar on desktop, create an appointment schedule for discovery calls.
2. Choose the real meeting duration, availability, time zone, meeting location/video conferencing, and booking questions. Check the settings available for your Google account.
3. Open the schedule's sharing options and copy the public booking-page link.
4. Set `discoveryCall.url` to the full `https://calendar.google.com/calendar/appointments/schedules/...` URL. Google's `calendar.app.google/...` short link enables the external button only; use the full booking-page URL for the inline calendar.
5. Test signed out, including a mobile browser. Verify actual slots, time-zone display, confirmation email, meeting link, and cancellation/rescheduling options in Google's booking flow.

The iframe appends `gv=true`. The deployment CSP permits frames only from `https://calendar.google.com`; hosting configurations that do not use `deploy/headers.conf` need the equivalent `frame-src` allowance. No external scripts are needed.

The permanent new-tab booking link remains available if the embedded page fails to load. No availability or booking confirmation is simulated by the portfolio. The contact email form remains available below.

Changes are prepared locally. No deployment or repository push is performed.
