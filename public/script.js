document.addEventListener('DOMContentLoaded', function () {
    const setAlarmButton = document.getElementById('set-alarm');
    const alarmTimeInput = document.getElementById('alarm-time');

    setAlarmButton.addEventListener('click', function () {
        const alarmTime = alarmTimeInput.value;
        if (!alarmTime) {
            alert('Please enter a valid alarm time.');
            return;
        }

        const now = new Date();
        const [hours, minutes] = alarmTime.split(':');
        const alarmDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, 0, 0);

        const timeUntilAlarm = alarmDate - now;
        if (timeUntilAlarm < 0) {
            alert('Invalid time. Please set a future time.');
        } else {
            setTimeout(function () {
                alert('Alarm! Time to wake up!');
            }, timeUntilAlarm);
            alert(`Alarm set for ${alarmTime}`);
        }
    });
});
