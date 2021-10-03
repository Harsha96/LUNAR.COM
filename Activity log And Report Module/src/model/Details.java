package model;


public class Details {

    private String   Activity;
    private String Name;
    private String Des;
    private String Date;
    private String Time;


    public Details() {
    }


    public Details(String activity, String name, String des, String date, String time) {
        Activity = activity;
        Name = name;
        Des = des;
        Date = date;
        Time = time;
    }



    public String getActivity() {
        return Activity;
    }

    public void setActivity(String activity) {
        Activity = activity;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getDes() {
        return Des;
    }

    public void setDes(String des) {
        Des = des;
    }

    public String getDate() {
        return Date;
    }

    public void setDate(String date) {
        Date = date;
    }

    public String getTime() {
        return Time;
    }

    public void setTime(String time) {
        Time = time;
    }
}
