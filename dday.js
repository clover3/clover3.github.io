<script type="text/javascript">
function DateToString(d)
{
	str = d.getFullYear() + '/'  + (d.getMonth() +1)+ '/'  + d.getDate();
	return str;
}

function GetSecondLeft(dday)
{
	var now = new Date();
	var secondLeft = (dday.getTime() - now.getTime()) / 1000;
	return Math.ceil(secondLeft);
}

function GetDayLeft(dday)
{
	var now = new Date();
	var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	var dayLeft = (dday.getTime() - today.getTime()) / 1000 / 60 / 60 / 24;
	return Math.ceil(dayLeft);
}


function GetHourLeft(dday)
{
	var hourLeft = GetSecondLeft(dday) / 3600;
	return Math.ceil(hourLeft);
}

dday_clover = new Date('04/11/2015');

</script>