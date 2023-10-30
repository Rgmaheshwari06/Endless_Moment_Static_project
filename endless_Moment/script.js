function showSchedule(classType) {
    const yogaSchedule = `
        <p>Mondays: 6:00 PM - 7:30 PM</p>
        <p>Wednesdays: 6:00 PM - 7:30 PM</p>
    `;

    const danceSchedule = `
        <p>Tuesdays: 7:00 PM - 8:30 PM</p>
        <p>Thursdays: 7:00 PM - 8:30 PM</p>
    `;

    const yogaScheduleDiv = document.getElementById('yoga-schedule');
    const danceScheduleDiv = document.getElementById('dance-schedule');

    if (classType === 'yoga') {
        yogaScheduleDiv.innerHTML = yogaSchedule;
        danceScheduleDiv.innerHTML = '';
    } else if (classType === 'dance') {
        danceScheduleDiv.innerHTML = danceSchedule;
        yogaScheduleDiv.innerHTML = '';
    }

    document.getElementById('schedule').classList.remove('hidden');
}