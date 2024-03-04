# Web Front End History

## Tuesday 1/9/24
Beginning to do some actual work. I've not gotten through all the Udemy training yet but, want to get started.

1. Got this history.md file created
2. Mucked around with the styles.css sheet.
3. Am reviewing Section 6 of the Udemy bootcamp
4. Updated the Readme with the actual Azure static website URL

## Tuesday 2/6/24
Stopping the Udemy class. Got through the API section. The rest of course appears to be Node JS and React. I will take what I've gone through and reference it as needed as I start building some type of web site. Not sure what yet. I envision a site that retrieves data from an API and displays it on the page in a table or graph. I can use the APIs I built using Azure Functions (in DHL account) or, another 3rd party source. I think I will:

1. Build a site connecting to 3rd party API to understand how to connect, bring data in, display it, pass search parameters etc.
2. I will use Google Charts to learn that software
3. Then, when I'm comfortable to move on, I can build the backend using SQL Server, Azure Function API (or another one of the rapid API building technologies from Microsoft) in my personal Azure account.
4. Then I can find a use case for building a front end to the tables to populate data. Use case perhaps in DHL.

**PROJECT**
Let's try working with this Countries rest API:
https://restcountries.com/

Looks simple. I loaded this endpoint in Postman and without having to do anything else, I got json of all the countries.
https://restcountries.com/v3.1/all
![countries_endpoint](all_countries_endpoint.jpg)

Done for today. Will now try to commit and sync with my github repo that, is connected to my static azure web page. Let's see if it works.

##Wednesday 2/7/24
Change of plans. I found the company that provides professional sports API and data: statorium.com
I spoke with a guy and set me up with an annual paid subscription ($50). I got an official API key and access to EPL data!
I tested some basic API calls using the key and confirmed that I can get to the data and it works!

Example:
####What league do I have access to?
https://api.statorium.com/api/v1/leagues/?apikey=0dc62921775ba39d7c2d0f630699b5c4

```
{
    "gmtUpdated": 1707311043,
    "leagues": [
        {
            "id": "1",
            "name": "ENGLAND: Premier League"
        }
    ]
}
```
####What seasons do I have access to for my league?
 https://api.statorium.com/api/v1/leagues/1/?apikey=0dc62921775ba39d7c2d0f630699b5c4

 ```
 {
    "gmtUpdated": 1707311802,
    "league": {
        "id": "1",
        "name": "ENGLAND: Premier League",
        "logo": "https://api.statorium.com/media/bearleague/bl15562691252122.png",
        "seasons": [
            {
                "seasonID": "252",
                "seasonName": "2023-24"
            },
            {
                "seasonID": "165",
                "seasonName": "2022-23"
            },
            {
                "seasonID": "112",
                "seasonName": "2021-22"
            },
            {
                "seasonID": "59",
                "seasonName": "2020-21"
            },
            {
                "seasonID": "24",
                "seasonName": "2019-20"
            },
            {
                "seasonID": "1",
                "seasonName": "2018-19"
            }
        ]
    }
}
 ```

 ###What are the current standings (see gmtUpdated) for my league in chosen season?
 https://api.statorium.com/api/v1/standings/252?apikey=0dc62921775ba39d7c2d0f630699b5c4
 ```
 {
    "gmtUpdated": 1707300005,
    "season": {
        "seasonID": 252,
        "leagueID": "1",
        "seasonName": "2023-24",
        "fullName": "ENGLAND: Premier League 2023-24",
        "stages": false,
        "groups": [],
        "standings": [
            {
                "teamID": "3",
                "teamName": "Liverpool FC",
                "options": "{\"played_chk\":\"23\",\"winhome_chk\":\"9\",\"winaway_chk\":\"6\",\"drawhome_chk\":\"2\",\"drawaway_chk\":\"4\",\"losthome_chk\":\"0\",\"lostaway_chk\":\"2\",\"home_win_pts\":\"9\",\"away_win_pts\":\"6\",\"home_draw_pts\":\"2\",\"away_draw_pts\":\"4\",\"home_loose_pts\":\"0\",\"away_loose_pts\":\"2\",\"home_bonus\":\"0.00\",\"away_bonus\":\"0.00\",\"goalscore_chk\":\"52\",\"goalconc_chk\":\"22\",\"home_points\":\"0.00\",\"away_points\":\"0.00\",\"id\":\"3\",\"win_chk\":15,\"draw_chk\":6,\"lost_chk\":2,\"diff_chk\":\"52 - 22\",\"gd_chk\":30,\"point_chk\":51,\"bonuspts_chk\":0,\"percent_chk\":\"0.783\",\"pointshome_chk\":29,\"pointsaway_chk\":22,\"otwin_chk\":0,\"otlost_chk\":0}",
                "ordering": "1",
                "logo": "https://api.statorium.com/media/bearleague/bl16258353592797.png",
                "color": "#003300"
            },
            {
                "teamID": "4",
                "teamName": "Manchester City",
                "options": "{\"played_chk\":\"22\",\"winhome_chk\":\"7\",\"winaway_chk\":\"8\",\"drawhome_chk\":\"3\",\"drawaway_chk\":\"1\",\"losthome_chk\":\"0\",\"lostaway_chk\":\"3\",\"home_win_pts\":\"7\",\"away_win_pts\":\"8\",\"home_draw_pts\":\"3\",\"away_draw_pts\":\"1\",\"home_loose_pts\":\"0\",\"away_loose_pts\":\"3\",\"home_bonus\":\"0.00\",\"away_bonus\":\"0.00\",\"goalscore_chk\":\"54\",\"goalconc_chk\":\"25\",\"home_points\":\"0.00\",\"away_points\":\"0.00\",\"id\":\"4\",\"win_chk\":15,\"draw_chk\":4,\"lost_chk\":3,\"diff_chk\":\"54 - 25\",\"gd_chk\":29,\"point_chk\":49,\"bonuspts_chk\":0,\"percent_chk\":\"0.773\",\"pointshome_chk\":24,\"pointsaway_chk\":25,\"otwin_chk\":0,\"otlost_chk\":0}",
                "ordering": "2",
                "logo": "https://api.statorium.com/media/bearleague/bl15524863261959.png",
                "color": "#003300"
            },
            {
                "teamID": "9",
                "teamName": "Arsenal FC",
                "options": "{\"played_chk\":\"23\",\"winhome_chk\":\"9\",\"winaway_chk\":\"6\",\"drawhome_chk\":\"2\",\"drawaway_chk\":\"2\",\"losthome_chk\":\"1\",\"lostaway_chk\":\"3\",\"home_win_pts\":\"9\",\"away_win_pts\":\"6\",\"home_draw_pts\":\"2\",\"away_draw_pts\":\"2\",\"home_loose_pts\":\"1\",\"away_loose_pts\":\"3\",\"home_bonus\":\"0.00\",\"away_bonus\":\"0.00\",\"goalscore_chk\":\"47\",\"goalconc_chk\":\"22\",\"home_points\":\"0.00\",\"away_points\":\"0.00\",\"id\":\"9\",\"win_chk\":15,\"draw_chk\":4,\"lost_chk\":4,\"diff_chk\":\"47 - 22\",\"gd_chk\":25,\"point_chk\":49,\"bonuspts_chk\":0,\"percent_chk\":\"0.739\",\"pointshome_chk\":29,\"pointsaway_chk\":20,\"otwin_chk\":0,\"otlost_chk\":0}",
                "ordering": "3",
                "logo": "https://api.statorium.com/media/bearleague/bl15669942151527.png",
                "color": "#003300"
            },
            {
                "teamID": "112",
                "teamName": "Aston Villa",
                "options": "{\"played_chk\":\"23\",\"winhome_chk\":\"9\",\"winaway_chk\":\"5\",\"drawhome_chk\":\"1\",\"drawaway_chk\":\"3\",\"losthome_chk\":\"1\",\"lostaway_chk\":\"4\",\"home_win_pts\":\"9\",\"away_win_pts\":\"5\",\"home_draw_pts\":\"1\",\"away_draw_pts\":\"3\",\"home_loose_pts\":\"1\",\"away_loose_pts\":\"4\",\"home_bonus\":\"0.00\",\"away_bonus\":\"0.00\",\"goalscore_chk\":\"49\",\"goalconc_chk\":\"30\",\"home_points\":\"0.00\",\"away_points\":\"0.00\",\"id\":\"112\",\"win_chk\":14,\"draw_chk\":4,\"lost_chk\":5,\"diff_chk\":\"49 - 30\",\"gd_chk\":19,\"point_chk\":46,\"bonuspts_chk\":0,\"percent_chk\":\"0.696\",\"pointshome_chk\":28,\"pointsaway_chk\":18,\"otwin_chk\":0,\"otlost_chk\":0}",
                "ordering": "4",
                "logo": "https://api.statorium.com/media/bearleague/bl15650923042439.png",
                "color": "#003300"
            },
            {
                "teamID": "2",
                "teamName": "Tottenham Hotspur FC",
                "options": "{\"played_chk\":\"23\",\"winhome_chk\":\"8\",\"winaway_chk\":\"5\",\"drawhome_chk\":\"0\",\"drawaway_chk\":\"5\",\"losthome_chk\":\"3\",\"lostaway_chk\":\"2\",\"home_win_pts\":\"8\",\"away_win_pts\":\"5\",\"home_draw_pts\":\"0\",\"away_draw_pts\":\"5\",\"home_loose_pts\":\"3\",\"away_loose_pts\":\"2\",\"home_bonus\":\"0.00\",\"away_bonus\":\"0.00\",\"goalscore_chk\":\"49\",\"goalconc_chk\":\"35\",\"home_points\":\"0.00\",\"away_points\":\"0.00\",\"id\":\"2\",\"win_chk\":13,\"draw_chk\":5,\"lost_chk\":5,\"diff_chk\":\"49 - 35\",\"gd_chk\":14,\"point_chk\":44,\"bonuspts_chk\":0,\"percent_chk\":\"0.674\",\"pointshome_chk\":24,\"pointsaway_chk\":20,\"otwin_chk\":0,\"otlost_chk\":0}",
                "ordering": "5",
                "logo": "https://api.statorium.com/media/bearleague/bl1552486480602.png",
                "color": "#0000CC"
            },
            {
                "teamID": "7",
                "teamName": "Manchester United",
                "options": "{\"played_chk\":\"23\",\"winhome_chk\":\"7\",\"winaway_chk\":\"5\",\"drawhome_chk\":\"1\",\"drawaway_chk\":\"1\",\"losthome_chk\":\"4\",\"lostaway_chk\":\"5\",\"home_win_pts\":\"7\",\"away_win_pts\":\"5\",\"home_draw_pts\":\"1\",\"away_draw_pts\":\"1\",\"home_loose_pts\":\"4\",\"away_loose_pts\":\"5\",\"home_bonus\":\"0.00\",\"away_bonus\":\"0.00\",\"goalscore_chk\":\"31\",\"goalconc_chk\":\"32\",\"home_points\":\"0.00\",\"away_points\":\"0.00\",\"id\":\"7\",\"win_chk\":12,\"draw_chk\":2,\"lost_chk\":9,\"diff_chk\":\"31 - 32\",\"gd_chk\":-1,\"point_chk\":38,\"bonuspts_chk\":0,\"percent_chk\":\"0.565\",\"pointshome_chk\":22,\"pointsaway_chk\":16,\"otwin_chk\":0,\"otlost_chk\":0}",
                "ordering": "6",
                "logo": "https://api.statorium.com/media/bearleague/bl1552486381728.png",
                "color": ""
            },
            {
                "teamID": "1",
                "teamName": "West Ham United",
                "options": "{\"played_chk\":\"23\",\"winhome_chk\":\"5\",\"winaway_chk\":\"5\",\"drawhome_chk\":\"4\",\"drawaway_chk\":\"2\",\"losthome_chk\":\"2\",\"lostaway_chk\":\"5\",\"home_win_pts\":\"5\",\"away_win_pts\":\"5\",\"home_draw_pts\":\"4\",\"away_draw_pts\":\"2\",\"home_loose_pts\":\"2\",\"away_loose_pts\":\"5\",\"home_bonus\":\"0.00\",\"away_bonus\":\"0.00\",\"goalscore_chk\":\"36\",\"goalconc_chk\":\"36\",\"home_points\":\"0.00\",\"away_points\":\"0.00\",\"id\":\"1\",\"win_chk\":10,\"draw_chk\":6,\"lost_chk\":7,\"diff_chk\":\"36 - 36\",\"gd_chk\":0,\"point_chk\":36,\"bonuspts_chk\":0,\"percent_chk\":\"0.565\",\"pointshome_chk\":19,\"pointsaway_chk\":17,\"otwin_chk\":0,\"otlost_chk\":0}",
                "ordering": "7",
                "logo": "https://api.statorium.com/media/bearleague/bl15524865522808.png",
                "color": ""
            },
            {
                "teamID": "19",
                "teamName": "Brighton & Hove Albion",
                "options": "{\"played_chk\":\"23\",\"winhome_chk\":\"6\",\"winaway_chk\":\"3\",\"drawhome_chk\":\"5\",\"drawaway_chk\":\"3\",\"losthome_chk\":\"1\",\"lostaway_chk\":\"5\",\"home_win_pts\":\"6\",\"away_win_pts\":\"3\",\"home_draw_pts\":\"5\",\"away_draw_pts\":\"3\",\"home_loose_pts\":\"1\",\"away_loose_pts\":\"5\",\"home_bonus\":\"0.00\",\"away_bonus\":\"0.00\",\"goalscore_chk\":\"42\",\"goalconc_chk\":\"38\",\"home_points\":\"0.00\",\"away_points\":\"0.00\",\"id\":\"19\",\"win_chk\":9,\"draw_chk\":8,\"lost_chk\":6,\"diff_chk\":\"42 - 38\",\"gd_chk\":4,\"point_chk\":35,\"bonuspts_chk\":0,\"percent_chk\":\"0.565\",\"pointshome_chk\":23,\"pointsaway_chk\":12,\"otwin_chk\":0,\"otlost_chk\":0}",
                "ordering": "8",
                "logo": "https://api.statorium.com/media/bearleague/bl15524825522856.png",
                "color": ""
            },
            {
                "teamID": "10",
                "teamName": "Newcastle United FC",
                "options": "{\"played_chk\":\"23\",\"winhome_chk\":\"8\",\"winaway_chk\":\"2\",\"drawhome_chk\":\"1\",\"drawaway_chk\":\"2\",\"losthome_chk\":\"3\",\"lostaway_chk\":\"7\",\"home_win_pts\":\"8\",\"away_win_pts\":\"2\",\"home_draw_pts\":\"1\",\"away_draw_pts\":\"2\",\"home_loose_pts\":\"3\",\"away_loose_pts\":\"7\",\"home_bonus\":\"0.00\",\"away_bonus\":\"0.00\",\"goalscore_chk\":\"48\",\"goalconc_chk\":\"37\",\"home_points\":\"0.00\",\"away_points\":\"0.00\",\"id\":\"10\",\"win_chk\":10,\"draw_chk\":3,\"lost_chk\":10,\"diff_chk\":\"48 - 37\",\"gd_chk\":11,\"point_chk\":33,\"bonuspts_chk\":0,\"percent_chk\":\"0.500\",\"pointshome_chk\":25,\"pointsaway_chk\":8,\"otwin_chk\":0,\"otlost_chk\":0}",
                "ordering": "9",
                "logo": "https://api.statorium.com/media/bearleague/bl15524864301957.png",
                "color": ""
            },
            {
                "teamID": "13",
                "teamName": "Wolverhampton Wanderers",
                "options": "{\"played_chk\":\"23\",\"winhome_chk\":\"5\",\"winaway_chk\":\"4\",\"drawhome_chk\":\"3\",\"drawaway_chk\":\"2\",\"losthome_chk\":\"3\",\"lostaway_chk\":\"6\",\"home_win_pts\":\"5\",\"away_win_pts\":\"4\",\"home_draw_pts\":\"3\",\"away_draw_pts\":\"2\",\"home_loose_pts\":\"3\",\"away_loose_pts\":\"6\",\"home_bonus\":\"0.00\",\"away_bonus\":\"0.00\",\"goalscore_chk\":\"37\",\"goalconc_chk\":\"37\",\"home_points\":\"0.00\",\"away_points\":\"0.00\",\"id\":\"13\",\"win_chk\":9,\"draw_chk\":5,\"lost_chk\":9,\"diff_chk\":\"37 - 37\",\"gd_chk\":0,\"point_chk\":32,\"bonuspts_chk\":0,\"percent_chk\":\"0.500\",\"pointshome_chk\":18,\"pointsaway_chk\":14,\"otwin_chk\":0,\"otlost_chk\":0}",
                "ordering": "10",
                "logo": "https://api.statorium.com/media/bearleague/bl15524866411365.png",
                "color": ""
            },
            {
                "teamID": "8",
                "teamName": "Chelsea FC",
                "options": "{\"played_chk\":\"23\",\"winhome_chk\":\"5\",\"winaway_chk\":\"4\",\"drawhome_chk\":\"3\",\"drawaway_chk\":\"1\",\"losthome_chk\":\"4\",\"lostaway_chk\":\"6\",\"home_win_pts\":\"5\",\"away_win_pts\":\"4\",\"home_draw_pts\":\"3\",\"away_draw_pts\":\"1\",\"home_loose_pts\":\"4\",\"away_loose_pts\":\"6\",\"home_bonus\":\"0.00\",\"away_bonus\":\"0.00\",\"goalscore_chk\":\"38\",\"goalconc_chk\":\"39\",\"home_points\":\"0.00\",\"away_points\":\"0.00\",\"id\":\"8\",\"win_chk\":9,\"draw_chk\":4,\"lost_chk\":10,\"diff_chk\":\"38 - 39\",\"gd_chk\":-1,\"point_chk\":31,\"bonuspts_chk\":0,\"percent_chk\":\"0.478\",\"pointshome_chk\":18,\"pointsaway_chk\":13,\"otwin_chk\":0,\"otlost_chk\":0}",
                "ordering": "11",
                "logo": "https://api.statorium.com/media/bearleague/bl15524829401976.png",
                "color": ""
            },
            {
                "teamID": "16",
                "teamName": "AFC Bournemouth",
                "options": "{\"played_chk\":\"22\",\"winhome_chk\":\"3\",\"winaway_chk\":\"4\",\"drawhome_chk\":\"4\",\"drawaway_chk\":\"2\",\"losthome_chk\":\"4\",\"lostaway_chk\":\"5\",\"home_win_pts\":\"3\",\"away_win_pts\":\"4\",\"home_draw_pts\":\"4\",\"away_draw_pts\":\"2\",\"home_loose_pts\":\"4\",\"away_loose_pts\":\"5\",\"home_bonus\":\"0.00\",\"away_bonus\":\"0.00\",\"goalscore_chk\":\"30\",\"goalconc_chk\":\"41\",\"home_points\":\"0.00\",\"away_points\":\"0.00\",\"id\":\"16\",\"win_chk\":7,\"draw_chk\":6,\"lost_chk\":9,\"diff_chk\":\"30 - 41\",\"gd_chk\":-11,\"point_chk\":27,\"bonuspts_chk\":0,\"percent_chk\":\"0.455\",\"pointshome_chk\":13,\"pointsaway_chk\":14,\"otwin_chk\":0,\"otlost_chk\":0}",
                "ordering": "12",
                "logo": "https://api.statorium.com/media/bearleague/bl15524821011860.png",
                "color": ""
            },
            {
                "teamID": "5",
                "teamName": "Fulham FC",
                "options": "{\"played_chk\":\"23\",\"winhome_chk\":\"6\",\"winaway_chk\":\"1\",\"drawhome_chk\":\"1\",\"drawaway_chk\":\"4\",\"losthome_chk\":\"4\",\"lostaway_chk\":\"7\",\"home_win_pts\":\"6\",\"away_win_pts\":\"1\",\"home_draw_pts\":\"1\",\"away_draw_pts\":\"4\",\"home_loose_pts\":\"4\",\"away_loose_pts\":\"7\",\"home_bonus\":\"0.00\",\"away_bonus\":\"0.00\",\"goalscore_chk\":\"30\",\"goalconc_chk\":\"38\",\"home_points\":\"0.00\",\"away_points\":\"0.00\",\"id\":\"5\",\"win_chk\":7,\"draw_chk\":5,\"lost_chk\":11,\"diff_chk\":\"30 - 38\",\"gd_chk\":-8,\"point_chk\":26,\"bonuspts_chk\":0,\"percent_chk\":\"0.413\",\"pointshome_chk\":19,\"pointsaway_chk\":7,\"otwin_chk\":0,\"otlost_chk\":0}",
                "ordering": "13",
                "logo": "https://api.statorium.com/media/bearleague/bl15524831212190.png",
                "color": ""
            },
            {
                "teamID": "15",
                "teamName": "Crystal Palace",
                "options": "{\"played_chk\":\"23\",\"winhome_chk\":\"3\",\"winaway_chk\":\"3\",\"drawhome_chk\":\"3\",\"drawaway_chk\":\"3\",\"losthome_chk\":\"5\",\"lostaway_chk\":\"6\",\"home_win_pts\":\"3\",\"away_win_pts\":\"3\",\"home_draw_pts\":\"3\",\"away_draw_pts\":\"3\",\"home_loose_pts\":\"5\",\"away_loose_pts\":\"6\",\"home_bonus\":\"0.00\",\"away_bonus\":\"0.00\",\"goalscore_chk\":\"26\",\"goalconc_chk\":\"40\",\"home_points\":\"0.00\",\"away_points\":\"0.00\",\"id\":\"15\",\"win_chk\":6,\"draw_chk\":6,\"lost_chk\":11,\"diff_chk\":\"26 - 40\",\"gd_chk\":-14,\"point_chk\":24,\"bonuspts_chk\":0,\"percent_chk\":\"0.391\",\"pointshome_chk\":12,\"pointsaway_chk\":12,\"otwin_chk\":0,\"otlost_chk\":0}",
                "ordering": "14",
                "logo": "https://api.statorium.com/media/bearleague/bl15524867882856.png",
                "color": ""
            },
            {
                "teamID": "186",
                "teamName": "Brentford FC",
                "options": "{\"played_chk\":\"22\",\"winhome_chk\":\"4\",\"winaway_chk\":\"2\",\"drawhome_chk\":\"3\",\"drawaway_chk\":\"1\",\"losthome_chk\":\"5\",\"lostaway_chk\":\"7\",\"home_win_pts\":\"4\",\"away_win_pts\":\"2\",\"home_draw_pts\":\"3\",\"away_draw_pts\":\"1\",\"home_loose_pts\":\"5\",\"away_loose_pts\":\"7\",\"home_bonus\":\"0.00\",\"away_bonus\":\"0.00\",\"goalscore_chk\":\"32\",\"goalconc_chk\":\"39\",\"home_points\":\"0.00\",\"away_points\":\"0.00\",\"id\":\"186\",\"win_chk\":6,\"draw_chk\":4,\"lost_chk\":12,\"diff_chk\":\"32 - 39\",\"gd_chk\":-7,\"point_chk\":22,\"bonuspts_chk\":0,\"percent_chk\":\"0.364\",\"pointshome_chk\":15,\"pointsaway_chk\":7,\"otwin_chk\":0,\"otlost_chk\":0}",
                "ordering": "15",
                "logo": "https://api.statorium.com/media/bearleague/bl15681868821055.png",
                "color": ""
            },
            {
                "teamID": "183",
                "teamName": "Nottingham Forest FC",
                "options": "{\"played_chk\":\"23\",\"winhome_chk\":\"3\",\"winaway_chk\":\"2\",\"drawhome_chk\":\"3\",\"drawaway_chk\":\"3\",\"losthome_chk\":\"5\",\"lostaway_chk\":\"7\",\"home_win_pts\":\"3\",\"away_win_pts\":\"2\",\"home_draw_pts\":\"3\",\"away_draw_pts\":\"3\",\"home_loose_pts\":\"5\",\"away_loose_pts\":\"7\",\"home_bonus\":\"0.00\",\"away_bonus\":\"0.00\",\"goalscore_chk\":\"28\",\"goalconc_chk\":\"41\",\"home_points\":\"0.00\",\"away_points\":\"0.00\",\"id\":\"183\",\"win_chk\":5,\"draw_chk\":6,\"lost_chk\":12,\"diff_chk\":\"28 - 41\",\"gd_chk\":-13,\"point_chk\":21,\"bonuspts_chk\":0,\"percent_chk\":\"0.348\",\"pointshome_chk\":12,\"pointsaway_chk\":9,\"otwin_chk\":0,\"otlost_chk\":0}",
                "ordering": "16",
                "logo": "https://api.statorium.com/media/bearleague/bl1598387963213.png",
                "color": ""
            },
            {
                "teamID": "187",
                "teamName": "Luton Town FC",
                "options": "{\"played_chk\":\"22\",\"winhome_chk\":\"3\",\"winaway_chk\":\"2\",\"drawhome_chk\":\"2\",\"drawaway_chk\":\"3\",\"losthome_chk\":\"6\",\"lostaway_chk\":\"6\",\"home_win_pts\":\"3\",\"away_win_pts\":\"2\",\"home_draw_pts\":\"2\",\"away_draw_pts\":\"3\",\"home_loose_pts\":\"6\",\"away_loose_pts\":\"6\",\"home_bonus\":\"0.00\",\"away_bonus\":\"0.00\",\"goalscore_chk\":\"32\",\"goalconc_chk\":\"42\",\"home_points\":\"0.00\",\"away_points\":\"0.00\",\"id\":\"187\",\"win_chk\":5,\"draw_chk\":5,\"lost_chk\":12,\"diff_chk\":\"32 - 42\",\"gd_chk\":-10,\"point_chk\":20,\"bonuspts_chk\":0,\"percent_chk\":\"0.341\",\"pointshome_chk\":11,\"pointsaway_chk\":9,\"otwin_chk\":0,\"otlost_chk\":0}",
                "ordering": "17",
                "logo": "https://api.statorium.com/media/bearleague/bl15681869751188.png",
                "color": ""
            },
            {
                "teamID": "6",
                "teamName": "Everton FC",
                "options": "{\"played_chk\":\"23\",\"winhome_chk\":\"3\",\"winaway_chk\":\"5\",\"drawhome_chk\":\"3\",\"drawaway_chk\":\"2\",\"losthome_chk\":\"6\",\"lostaway_chk\":\"4\",\"home_win_pts\":\"3\",\"away_win_pts\":\"5\",\"home_draw_pts\":\"3\",\"away_draw_pts\":\"2\",\"home_loose_pts\":\"6\",\"away_loose_pts\":\"4\",\"home_bonus\":\"0.00\",\"away_bonus\":\"0.00\",\"goalscore_chk\":\"26\",\"goalconc_chk\":\"30\",\"home_points\":\"0.00\",\"away_points\":\"0.00\",\"id\":\"6\",\"win_chk\":8,\"draw_chk\":5,\"lost_chk\":10,\"diff_chk\":\"26 - 30\",\"gd_chk\":-4,\"point_chk\":19,\"bonuspts_chk\":-10,\"percent_chk\":\"0.457\",\"pointshome_chk\":12,\"pointsaway_chk\":17,\"otwin_chk\":0,\"otlost_chk\":0}",
                "ordering": "18",
                "logo": "https://api.statorium.com/media/bearleague/bl15524829951130.png",
                "color": "#FF0000"
            },
            {
                "teamID": "12",
                "teamName": "Burnley FC",
                "options": "{\"played_chk\":\"23\",\"winhome_chk\":\"1\",\"winaway_chk\":\"2\",\"drawhome_chk\":\"2\",\"drawaway_chk\":\"2\",\"losthome_chk\":\"9\",\"lostaway_chk\":\"7\",\"home_win_pts\":\"1\",\"away_win_pts\":\"2\",\"home_draw_pts\":\"2\",\"away_draw_pts\":\"2\",\"home_loose_pts\":\"9\",\"away_loose_pts\":\"7\",\"home_bonus\":\"0.00\",\"away_bonus\":\"0.00\",\"goalscore_chk\":\"24\",\"goalconc_chk\":\"47\",\"home_points\":\"0.00\",\"away_points\":\"0.00\",\"id\":\"12\",\"win_chk\":3,\"draw_chk\":4,\"lost_chk\":16,\"diff_chk\":\"24 - 47\",\"gd_chk\":-23,\"point_chk\":13,\"bonuspts_chk\":0,\"percent_chk\":\"0.217\",\"pointshome_chk\":5,\"pointsaway_chk\":8,\"otwin_chk\":0,\"otlost_chk\":0}",
                "ordering": "19",
                "logo": "https://api.statorium.com/media/bearleague/bl16878849592697.png",
                "color": "#FF0000"
            },
            {
                "teamID": "113",
                "teamName": "Sheffield United",
                "options": "{\"played_chk\":\"23\",\"winhome_chk\":\"2\",\"winaway_chk\":\"0\",\"drawhome_chk\":\"2\",\"drawaway_chk\":\"2\",\"losthome_chk\":\"8\",\"lostaway_chk\":\"9\",\"home_win_pts\":\"2\",\"away_win_pts\":\"0\",\"home_draw_pts\":\"2\",\"away_draw_pts\":\"2\",\"home_loose_pts\":\"8\",\"away_loose_pts\":\"9\",\"home_bonus\":\"0.00\",\"away_bonus\":\"0.00\",\"goalscore_chk\":\"19\",\"goalconc_chk\":\"59\",\"home_points\":\"0.00\",\"away_points\":\"0.00\",\"id\":\"113\",\"win_chk\":2,\"draw_chk\":4,\"lost_chk\":17,\"diff_chk\":\"19 - 59\",\"gd_chk\":-40,\"point_chk\":10,\"bonuspts_chk\":0,\"percent_chk\":\"0.174\",\"pointshome_chk\":8,\"pointsaway_chk\":2,\"otwin_chk\":0,\"otlost_chk\":0}",
                "ordering": "20",
                "logo": "https://api.statorium.com/media/bearleague/bl1565092102202.png",
                "color": "#FF0000"
            }
        ]
    }
}
```
####Team information for Chelsea
https://api.statorium.com/api/v1/teams/8?apikey=0dc62921775ba39d7c2d0f630699b5c4
```
{
    "gmtUpdated": 1707312228,
    "team": {
        "teamID": "8",
        "seasonID": 0,
        "teamName": "Chelsea FC",
        "shortName": "CHE",
        "middleName": "Chelsea",
        "city": "London",
        "logo": "https://api.statorium.com/media/bearleague/bl15524829401976.png",
        "homeVenue": {
            "name": "Stamford Bridge",
            "id": "11"
        },
        "bonusPoint": null,
        "additionalInfo": {
            "coach": null
        },
        "players": []
    }
}
```
####How to get player information for player ID 5
https://api.statorium.com/api/v1/players/5/?season_id=252&apikey=0dc62921775ba39d7c2d0f630699b5c4
```
{
    "gmtUpdated": 1707313179,
    "player": {
        "playerID": "5",
        "firstName": "Fuka Arthur",
        "lastName": "Masuaku Kawela",
        "shortName": "A. Masuaku",
        "fullName": "Arthur Masuaku",
        "homeName": "Fuka Arthur Masuaku Kawela",
        "country": {
            "name": "Congo, The Democratic Republic of the",
            "id": "51"
        },
        "currentTeam": {
            "name": null,
            "id": "0"
        },
        "photo": "https://api.statorium.com/media/bearleague/bl1554374651136.png",
        "additionalInfo": {
            "birthdate": "1993-11-07",
            "height": "179 cm",
            "weight": "70 kg",
            "position": "2"
        },
        "teams": []
    }
}
```

###Gets players from a team
https://api.statorium.com/api/v1/teams/8/?season_id=252&apikey=0dc62921775ba39d7c2d0f630699b5c4

```
{
    "gmtUpdated": 1707357908,
    "team": {
        "teamID": "8",
        "seasonID": 252,
        "teamName": "Chelsea FC",
        "shortName": "CHE",
        "middleName": "Chelsea",
        "city": "London",
        "logo": "https://api.statorium.com/media/bearleague/bl15524829401976.png",
        "homeVenue": {
            "name": "Stamford Bridge",
            "id": "11"
        },
        "bonusPoint": "0",
        "additionalInfo": {
            "coach": null
        },
        "players": [
            {
                "playerID": "15191",
                "teamID": 8,
                "firstName": "Cole Jermaine",
                "lastName": "Palmer",
                "shortName": "C. Palmer",
                "fullName": "Cole Palmer",
                "homeName": "Cole Jermaine Palmer",
                "country": {
                    "name": "England",
                    "id": "251"
                },
                "currentTeam": {
                    "name": null,
                    "id": "0"
                },
                "photo": "",
                "additionalInfo": {
                    "birthdate": "2002-05-06",
                    "height": "189 cm",
                    "weight": "72 kg",
                    "position": "3"
                },
                "playerNumber": "20",
                "playerDeparted": "0"
            },
            {
                "playerID": "115",
                "teamID": 8,
                "firstName": "Marcus",
                "lastName": "Bettinelli",
                "shortName": "M. Bettinelli",
                "fullName": "Marcus Bettinelli",
                "homeName": "",
                "country": {
                    "name": "England",
                    "id": "251"
                },
                "currentTeam": {
                    "name": null,
                    "id": "0"
                },
                "photo": "https://api.statorium.com/media/bearleague/bl15550624342570.png",
                "additionalInfo": {
                    "birthdate": "1992-05-24",
                    "height": "193 cm",
                    "weight": "82 kg",
                    "position": "1"
                },
                "playerNumber": "13",
                "playerDeparted": "0"
            },
            {
                "playerID": "3735",
                "teamID": 8,
                "firstName": "Wesley",
                "lastName": "Fofana",
                "shortName": "W. Fofana",
                "fullName": "Wesley Fofana",
                "homeName": "",
                "country": {
                    "name": "France",
                    "id": "74"
                },
                "currentTeam": {
                    "name": null,
                    "id": "0"
                },
                "photo": "https://api.statorium.com/media/bearleague/bl15648400521025.png",
                "additionalInfo": {
                    "birthdate": "2000-12-17",
                    "height": "190 cm",
                    "weight": "76 kg",
                    "position": "2"
                },
                "playerNumber": "33",
                "playerDeparted": "0"
            },
            {
                "playerID": "2298",
                "teamID": 8,
                "firstName": "Benoît",
                "lastName": "Badiashile Mukinayi",
                "shortName": "B. Badiashile",
                "fullName": "Benoît Badiashile",
                "homeName": "Benoît Badiashile Mukinayi",
                "country": {
                    "name": "France",
                    "id": "74"
                },
                "currentTeam": {
                    "name": null,
                    "id": "0"
                },
                "photo": "https://api.statorium.com/media/bearleague/bl15648341312689.png",
                "additionalInfo": {
                    "birthdate": "2001-03-26",
                    "height": "194 cm",
                    "weight": "77 kg",
                    "position": "2"
                },
                "playerNumber": "5",
                "playerDeparted": "0"
            },
            {
                "playerID": "29706",
                "teamID": 8,
                "firstName": "Levi Lemar Samuel",
                "lastName": "Colwill",
                "shortName": "L. Colwill",
                "fullName": "Levi Colwill",
                "homeName": "Levi Lemar Samuel Colwill",
                "country": {
                    "name": "England",
                    "id": "251"
                },
                "currentTeam": {
                    "name": null,
                    "id": "0"
                },
                "photo": "",
                "additionalInfo": {
                    "birthdate": "2003-02-26",
                    "height": "187 cm",
                    "weight": "75 kg",
                    "position": "2"
                },
                "playerNumber": "26",
                "playerDeparted": "0"
            },
            {
                "playerID": "2158",
                "teamID": 8,
                "firstName": "Axel",
                "lastName": "Disasi",
                "shortName": "A. Disasi",
                "fullName": "Axel Disasi",
                "homeName": "",
                "country": {
                    "name": "France",
                    "id": "74"
                },
                "currentTeam": {
                    "name": null,
                    "id": "0"
                },
                "photo": "https://api.statorium.com/media/bearleague/bl15634503521291.png",
                "additionalInfo": {
                    "birthdate": "1998-03-11",
                    "height": "190 cm",
                    "weight": "86 kg",
                    "position": "2"
                },
                "playerNumber": "2",
                "playerDeparted": "0"
            },
            {
                "playerID": "6272",
                "teamID": 8,
                "firstName": "Trevoh Thomas",
                "lastName": "Chalobah",
                "shortName": "T. Chalobah",
                "fullName": "Trevoh Chalobah",
                "homeName": "Trevoh Thomas Chalobah",
                "country": {
                    "name": "England",
                    "id": "251"
                },
                "currentTeam": {
                    "name": null,
                    "id": "0"
                },
                "photo": "https://api.statorium.com/media/bearleague/bl15707470941696.png",
                "additionalInfo": {
                    "birthdate": "1999-07-05",
                    "height": "190 cm",
                    "weight": "75 kg",
                    "position": "2"
                },
                "playerNumber": "14",
                "playerDeparted": "0"
            },
            {
                "playerID": "1922",
                "teamID": 8,
                "firstName": "Malang Mamadou William",
                "lastName": "Sarr",
                "shortName": "M. Sarr",
                "fullName": "Malang Sarr",
                "homeName": "Malang Mamadou William Sarr",
                "country": {
                    "name": "France",
                    "id": "74"
                },
                "currentTeam": {
                    "name": null,
                    "id": "0"
                },
                "photo": "https://api.statorium.com/media/bearleague/bl1565259141101.png",
                "additionalInfo": {
                    "birthdate": "1999-01-23",
                    "height": "182 cm",
                    "weight": "73 kg",
                    "position": "2"
                },
                "playerNumber": "",
                "playerDeparted": "0"
            },
            {
                "playerID": "1979",
                "teamID": 8,
                "firstName": "Thiago Emiliano",
                "lastName": "da Silva",
                "shortName": "T. Silva",
                "fullName": "Thiago Silva",
                "homeName": "Thiago Emiliano da Silva",
                "country": {
                    "name": "Brazil",
                    "id": "31"
                },
                "currentTeam": {
                    "name": null,
                    "id": "0"
                },
                "photo": "https://api.statorium.com/media/bearleague/bl16236043362318.png",
                "additionalInfo": {
                    "birthdate": "1984-09-22",
                    "height": "183 cm",
                    "weight": "79 kg",
                    "position": "2"
                },
                "playerNumber": "6",
                "playerDeparted": "0"
            },
            {
                "playerID": "365",
                "teamID": 8,
                "firstName": "Benjamin James",
                "lastName": "Chilwell",
                "shortName": "B. Chilwell",
                "fullName": "Ben Chilwell",
                "homeName": "Benjamin James Chilwell",
                "country": {
                    "name": "England",
                    "id": "251"
                },
                "currentTeam": {
                    "name": null,
                    "id": "0"
                },
                "photo": "https://api.statorium.com/media/bearleague/bl1619807416409.png",
                "additionalInfo": {
                    "birthdate": "1996-12-21",
                    "height": "178 cm",
                    "weight": "77 kg",
                    "position": "2"
                },
                "playerNumber": "21",
                "playerDeparted": "0"
            },
            {
                "playerID": "652",
                "teamID": 8,
                "firstName": "Marc",
                "lastName": "Cucurella Saseta",
                "shortName": "M. Cucurella",
                "fullName": "Marc Cucurella",
                "homeName": "Marc Cucurella Saseta",
                "country": {
                    "name": "Spain",
                    "id": "206"
                },
                "currentTeam": {
                    "name": null,
                    "id": "0"
                },
                "photo": "https://api.statorium.com/media/bearleague/bl15569724482400.png",
                "additionalInfo": {
                    "birthdate": "1998-07-22",
                    "height": "175 cm",
                    "weight": "67 kg",
                    "position": "2"
                },
                "playerNumber": "3",
                "playerDeparted": "0"
            },
            {
                "playerID": "10492",
                "teamID": 8,
                "firstName": "Ian Ethan",
                "lastName": "Maatsen",
                "shortName": "I. Maatsen",
                "fullName": "Ian Maatsen",
                "homeName": "Ian Ethan Maatsen",
                "country": {
                    "name": "Netherlands",
                    "id": "155"
                },
                "currentTeam": {
                    "name": null,
                    "id": "0"
                },
                "photo": "",
                "additionalInfo": {
                    "birthdate": "2002-03-10",
                    "height": "170 cm",
                    "weight": "65 kg",
                    "position": "2"
                },
                "playerNumber": "29",
                "playerDeparted": "1"
            },
            {
                "playerID": "4935",
                "teamID": 8,
                "firstName": "Reece",
                "lastName": "James",
                "shortName": "R. James",
                "fullName": "Reece James",
                "homeName": "",
                "country": {
                    "name": "England",
                    "id": "251"
                },
                "currentTeam": {
                    "name": null,
                    "id": "0"
                },
                "photo": "https://api.statorium.com/media/bearleague/bl16198072411476.png",
                "additionalInfo": {
                    "birthdate": "1999-12-08",
                    "height": "182 cm",
                    "weight": "82 kg",
                    "position": "2"
                },
                "playerNumber": "24",
                "playerDeparted": "0"
            },
            {
                "playerID": "20908",
                "teamID": 8,
                "firstName": "Malo",
                "lastName": "Gusto",
                "shortName": "M. Gusto",
                "fullName": "Malo Gusto",
                "homeName": "",
                "country": {
                    "name": "France",
                    "id": "74"
                },
                "currentTeam": {
                    "name": null,
                    "id": "0"
                },
                "photo": "",
                "additionalInfo": {
                    "birthdate": "2003-05-19",
                    "height": "179 cm",
                    "weight": "67 kg",
                    "position": "2"
                },
                "playerNumber": "27",
                "playerDeparted": "0"
            },
            {
                "playerID": "12727",
                "teamID": 8,
                "firstName": "Enzo Jeremías",
                "lastName": "Fernández",
                "shortName": "E. Fernández",
                "fullName": "Enzo Fernández",
                "homeName": "Enzo Jeremías Fernández",
                "country": {
                    "name": "Argentina",
                    "id": "11"
                },
                "currentTeam": {
                    "name": null,
                    "id": "0"
                },
                "photo": "https://api.statorium.com/media/bearleague/bl16686023592340.png",
                "additionalInfo": {
                    "birthdate": "2001-01-17",
                    "height": "178 cm",
                    "weight": "78 kg",
                    "position": "3"
                },
                "playerNumber": "8",
                "playerDeparted": "0"
            },
            {
                "playerID": "52783",
                "teamID": 8,
                "firstName": "Andrey",
                "lastName": "Nascimento dos Santos",
                "shortName": "A. Nascimento",
                "fullName": "Andrey Santos",
                "homeName": "",
                "country": {
                    "name": "Brazil",
                    "id": "31"
                },
                "currentTeam": {
                    "name": null,
                    "id": "0"
                },
                "photo": "",
                "additionalInfo": {
                    "birthdate": "2004-05-03",
                    "height": "180 cm",
                    "weight": "75 kg",
                    "position": "3"
                },
                "playerNumber": "20",
                "playerDeparted": "1"
            },
            {
                "playerID": "21736",
                "teamID": 8,
                "firstName": "Lesley Chimuanya",
                "lastName": "Ugochukwu",
                "shortName": "L. Ugochukwu",
                "fullName": "Lesley Ugochukwu",
                "homeName": "Lesley Chimuanya Ugochukwu",
                "country": {
                    "name": "France",
                    "id": "74"
                },
                "currentTeam": {
                    "name": null,
                    "id": "0"
                },
                "photo": "",
                "additionalInfo": {
                    "birthdate": "2004-03-26",
                    "height": "",
                    "weight": "",
                    "position": "3"
                },
                "playerNumber": "16",
                "playerDeparted": "0"
            },
            {
                "playerID": "6402",
                "teamID": 8,
                "firstName": "Conor",
                "lastName": "Gallagher",
                "shortName": "C. Gallagher",
                "fullName": "Conor Gallagher",
                "homeName": "",
                "country": {
                    "name": "England",
                    "id": "251"
                },
                "currentTeam": {
                    "name": null,
                    "id": "0"
                },
                "photo": "https://api.statorium.com/media/bearleague/bl15693567461163.png",
                "additionalInfo": {
                    "birthdate": "2000-02-06",
                    "height": "182 cm",
                    "weight": "74 kg",
                    "position": "3"
                },
                "playerNumber": "23",
                "playerDeparted": "0"
            },
            {
                "playerID": "26008",
                "teamID": 8,
                "firstName": "Carney Chibueze",
                "lastName": "Chukwuemeka",
                "shortName": "C. Chukwuemeka",
                "fullName": "Carney Chukwuemeka",
                "homeName": "Carney Chibueze Chukwuemeka",
                "country": {
                    "name": "England",
                    "id": "251"
                },
                "currentTeam": {
                    "name": null,
                    "id": "0"
                },
                "photo": "",
                "additionalInfo": {
                    "birthdate": "2003-10-20",
                    "height": "185 cm",
                    "weight": "70 kg",
                    "position": "3"
                },
                "playerNumber": "17",
                "playerDeparted": "0"
            },
            {
                "playerID": "44369",
                "teamID": 8,
                "firstName": "Cesare",
                "lastName": "Casadei",
                "shortName": "C. Casadei",
                "fullName": "Cesare Casadei",
                "homeName": "",
                "country": {
                    "name": "Italy",
                    "id": "108"
                },
                "currentTeam": {
                    "name": null,
                    "id": "0"
                },
                "photo": "",
                "additionalInfo": {
                    "birthdate": "2003-01-10",
                    "height": "172 cm",
                    "weight": "62 kg",
                    "position": "3"
                },
                "playerNumber": "31",
                "playerDeparted": "0"
            },
            {
                "playerID": "98",
                "teamID": 8,
                "firstName": "Raheem Shaquille",
                "lastName": "Sterling",
                "shortName": "R. Sterling",
                "fullName": "Raheem Sterling",
                "homeName": "Raheem Shaquille Sterling",
                "country": {
                    "name": "England",
                    "id": "251"
                },
                "currentTeam": {
                    "name": null,
                    "id": "0"
                },
                "photo": "https://api.statorium.com/media/bearleague/bl16230011282739.png",
                "additionalInfo": {
                    "birthdate": "1994-12-08",
                    "height": "170 cm",
                    "weight": "69 kg",
                    "position": "4"
                },
                "playerNumber": "7",
                "playerDeparted": "0"
            },
            {
                "playerID": "15379",
                "teamID": 8,
                "firstName": "Mykhaylo",
                "lastName": "Mudryk",
                "shortName": "M. Mudryk",
                "fullName": "Mykhaylo Mudryk",
                "homeName": "Мудрик Михайло Петрович",
                "country": {
                    "name": "Ukraine",
                    "id": "230"
                },
                "currentTeam": {
                    "name": null,
                    "id": "0"
                },
                "photo": "",
                "additionalInfo": {
                    "birthdate": "2001-01-05",
                    "height": "175 cm",
                    "weight": "61 kg",
                    "position": "4"
                },
                "playerNumber": "10",
                "playerDeparted": "0"
            },
            {
                "playerID": "40682",
                "teamID": 8,
                "firstName": "Diego Manuel Jadon",
                "lastName": "da Silva Moreira",
                "shortName": "D. Moreira",
                "fullName": "Diego Moreira",
                "homeName": "Diego Manuel Jadon da Silva Moreira",
                "country": {
                    "name": "Portugal",
                    "id": "177"
                },
                "currentTeam": {
                    "name": null,
                    "id": "0"
                },
                "photo": "",
                "additionalInfo": {
                    "birthdate": "2004-08-06",
                    "height": "179 cm",
                    "weight": "73 kg",
                    "position": "4"
                },
                "playerNumber": "43",
                "playerDeparted": "1"
            },
            {
                "playerID": "10261",
                "teamID": 8,
                "firstName": "Chukwunonso Tristan",
                "lastName": "Madueke",
                "shortName": "N. Madueke",
                "fullName": "Noni Madueke",
                "homeName": "Chukwunonso Tristan Madueke",
                "country": {
                    "name": "England",
                    "id": "251"
                },
                "currentTeam": {
                    "name": null,
                    "id": "0"
                },
                "photo": "",
                "additionalInfo": {
                    "birthdate": "2002-03-10",
                    "height": "176 cm",
                    "weight": "65 kg",
                    "position": "4"
                },
                "playerNumber": "11",
                "playerDeparted": "0"
            },
            {
                "playerID": "1988",
                "teamID": 8,
                "firstName": "Christopher Alan",
                "lastName": "Nkunku",
                "shortName": "C. Nkunku",
                "fullName": "Christopher Nkunku",
                "homeName": "Christopher Alan Nkunku",
                "country": {
                    "name": "France",
                    "id": "74"
                },
                "currentTeam": {
                    "name": null,
                    "id": "0"
                },
                "photo": "https://api.statorium.com/media/bearleague/bl15652975201226.png",
                "additionalInfo": {
                    "birthdate": "1997-11-14",
                    "height": "175 cm",
                    "weight": "68 kg",
                    "position": "4"
                },
                "playerNumber": "18",
                "playerDeparted": "0"
            },
            {
                "playerID": "20936",
                "teamID": 8,
                "firstName": "Nicolas",
                "lastName": "Jackson",
                "shortName": "N. Jackson",
                "fullName": "Nicolas Jackson",
                "homeName": "",
                "country": {
                    "name": "Senegal",
                    "id": "195"
                },
                "currentTeam": {
                    "name": null,
                    "id": "0"
                },
                "photo": "https://api.statorium.com/media/bearleague/bl1695386243554.webp",
                "additionalInfo": {
                    "birthdate": "2001-06-20",
                    "height": "186 cm",
                    "weight": "78 kg",
                    "position": "4"
                },
                "playerNumber": "15",
                "playerDeparted": "0"
            },
            {
                "playerID": "12891",
                "teamID": 8,
                "firstName": "Armando",
                "lastName": "Broja",
                "shortName": "A. Broja",
                "fullName": "Armando Broja",
                "homeName": "",
                "country": {
                    "name": "Albania",
                    "id": "3"
                },
                "currentTeam": {
                    "name": null,
                    "id": "0"
                },
                "photo": "https://api.statorium.com/media/bearleague/bl16282427332582.png",
                "additionalInfo": {
                    "birthdate": "2001-09-10",
                    "height": "186 cm",
                    "weight": "74 kg",
                    "position": "4"
                },
                "playerNumber": "19",
                "playerDeparted": "1"
            },
            {
                "playerID": "52392",
                "teamID": 8,
                "firstName": "Deivid Washington",
                "lastName": "de Souza Eugênio",
                "shortName": "D. Washington",
                "fullName": "Deivid Washington",
                "homeName": "",
                "country": {
                    "name": "Brazil",
                    "id": "31"
                },
                "currentTeam": {
                    "name": null,
                    "id": "0"
                },
                "photo": "",
                "additionalInfo": {
                    "birthdate": "2005-06-05",
                    "height": "187 cm",
                    "weight": "73 kg",
                    "position": "4"
                },
                "playerNumber": "36",
                "playerDeparted": "0"
            },
            {
                "playerID": "531",
                "teamID": 8,
                "firstName": "Robert",
                "lastName": "Sánchez",
                "shortName": "R. Sánchez",
                "fullName": "Robert Sánchez",
                "homeName": "",
                "country": {
                    "name": "Spain",
                    "id": "206"
                },
                "currentTeam": {
                    "name": null,
                    "id": "0"
                },
                "photo": "https://api.statorium.com/media/bearleague/bl1623008978618.png",
                "additionalInfo": {
                    "birthdate": "1997-11-18",
                    "height": "197 cm",
                    "weight": "85 kg",
                    "position": "1"
                },
                "playerNumber": "1",
                "playerDeparted": "0"
            },
            {
                "playerID": "12721",
                "teamID": 8,
                "firstName": "Moisés Isaac",
                "lastName": "Caicedo Corozo",
                "shortName": "M. Caicedo",
                "fullName": "Moisés Caicedo",
                "homeName": "Moisés Isaac Caicedo Corozo",
                "country": {
                    "name": "Ecuador",
                    "id": "63"
                },
                "currentTeam": {
                    "name": null,
                    "id": "0"
                },
                "photo": "https://api.statorium.com/media/bearleague/bl16240423641992.png",
                "additionalInfo": {
                    "birthdate": "2001-11-02",
                    "height": "178 cm",
                    "weight": "73 kg",
                    "position": "3"
                },
                "playerNumber": "25",
                "playerDeparted": "0"
            },
            {
                "playerID": "22922",
                "teamID": 8,
                "firstName": "Djordje",
                "lastName": "Petrovic",
                "shortName": "D. Petrovic",
                "fullName": "Djordje Petrovic",
                "homeName": "Ђорђе Петровић",
                "country": {
                    "name": "Serbia",
                    "id": "196"
                },
                "currentTeam": {
                    "name": null,
                    "id": "0"
                },
                "photo": "https://api.statorium.com/media/bearleague/bl1630056862272.png",
                "additionalInfo": {
                    "birthdate": "1999-10-08",
                    "height": "194 cm",
                    "weight": "89 kg",
                    "position": "1"
                },
                "playerNumber": "28",
                "playerDeparted": "0"
            },
            {
                "playerID": "32881",
                "teamID": 8,
                "firstName": "Lucas Carl Edvard",
                "lastName": "Bergström",
                "shortName": "L. Bergström",
                "fullName": "Lucas Bergström",
                "homeName": "Lucas Carl Edvard Bergström",
                "country": {
                    "name": "Finland",
                    "id": "73"
                },
                "currentTeam": {
                    "name": null,
                    "id": "0"
                },
                "photo": "",
                "additionalInfo": {
                    "birthdate": "2002-09-05",
                    "height": "205",
                    "weight": "",
                    "position": "1"
                },
                "playerNumber": "47",
                "playerDeparted": "0"
            },
            {
                "playerID": "36525",
                "teamID": 8,
                "firstName": "Mason",
                "lastName": "Burstow",
                "shortName": "M. Burstow",
                "fullName": "Mason Burstow",
                "homeName": "",
                "country": {
                    "name": "England",
                    "id": "251"
                },
                "currentTeam": {
                    "name": null,
                    "id": "0"
                },
                "photo": "",
                "additionalInfo": {
                    "birthdate": "2003-08-04",
                    "height": "187 cm",
                    "weight": "",
                    "position": "4"
                },
                "playerNumber": "37",
                "playerDeparted": "0"
            },
            {
                "playerID": "32886",
                "teamID": 8,
                "firstName": "Roméo",
                "lastName": "Lavia",
                "shortName": "R. Lavia",
                "fullName": "Roméo Lavia",
                "homeName": "",
                "country": {
                    "name": "Belgium",
                    "id": "22"
                },
                "currentTeam": {
                    "name": null,
                    "id": "0"
                },
                "photo": "",
                "additionalInfo": {
                    "birthdate": "2004-01-06",
                    "height": "181 cm",
                    "weight": "75 kg",
                    "position": "3"
                },
                "playerNumber": "45",
                "playerDeparted": "0"
            },
            {
                "playerID": "48171",
                "teamID": 8,
                "firstName": "Bashir",
                "lastName": "Humphreys",
                "shortName": "B. Humphreys",
                "fullName": "Bashir Humphreys",
                "homeName": "",
                "country": {
                    "name": "England",
                    "id": "251"
                },
                "currentTeam": {
                    "name": null,
                    "id": "0"
                },
                "photo": "",
                "additionalInfo": {
                    "birthdate": "2003-03-15",
                    "height": "186 cm",
                    "weight": "79 kg",
                    "position": "2"
                },
                "playerNumber": "48",
                "playerDeparted": "0"
            },
            {
                "playerID": "57988",
                "teamID": 8,
                "firstName": "Edward James",
                "lastName": "Beach",
                "shortName": "E. Beach",
                "fullName": "Eddie Beach",
                "homeName": "Edward James Beach",
                "country": {
                    "name": "Wales",
                    "id": "249"
                },
                "currentTeam": {
                    "name": null,
                    "id": "0"
                },
                "photo": "",
                "additionalInfo": {
                    "birthdate": "2003-10-09",
                    "height": "196 cm",
                    "weight": "",
                    "position": "1"
                },
                "playerNumber": "50",
                "playerDeparted": "0"
            },
            {
                "playerID": "53498",
                "teamID": 8,
                "firstName": "Alfie",
                "lastName": "Gilchrist",
                "shortName": "A. Gilchrist",
                "fullName": "Alfie Gilchrist",
                "homeName": "",
                "country": {
                    "name": "England",
                    "id": "251"
                },
                "currentTeam": {
                    "name": null,
                    "id": "0"
                },
                "photo": "",
                "additionalInfo": {
                    "birthdate": "2003-11-28",
                    "height": "183 cm",
                    "weight": "",
                    "position": "2"
                },
                "playerNumber": "42",
                "playerDeparted": "0"
            },
            {
                "playerID": "59058",
                "teamID": 8,
                "firstName": "Alex",
                "lastName": "Matos",
                "shortName": "A. Matos",
                "fullName": "Alex Matos",
                "homeName": "",
                "country": {
                    "name": "England",
                    "id": "251"
                },
                "currentTeam": {
                    "name": null,
                    "id": "0"
                },
                "photo": "",
                "additionalInfo": {
                    "birthdate": "2004-10-03",
                    "height": "175 cm",
                    "weight": "",
                    "position": "3"
                },
                "playerNumber": "52",
                "playerDeparted": "0"
            },
            {
                "playerID": "59059",
                "teamID": 8,
                "firstName": "Ronnie",
                "lastName": "Stutter",
                "shortName": "R. Stutter",
                "fullName": "Ronnie Stutter",
                "homeName": "",
                "country": {
                    "name": "England",
                    "id": "251"
                },
                "currentTeam": {
                    "name": null,
                    "id": "0"
                },
                "photo": "",
                "additionalInfo": {
                    "birthdate": "2005-01-06",
                    "height": "",
                    "weight": "",
                    "position": "4"
                },
                "playerNumber": "62",
                "playerDeparted": "0"
            },
            {
                "playerID": "59319",
                "teamID": 8,
                "firstName": "Joshua Royston",
                "lastName": "Brooking",
                "shortName": "J. Brooking",
                "fullName": "Josh Brooking",
                "homeName": "Joshua Royston Brooking",
                "country": {
                    "name": "England",
                    "id": "251"
                },
                "currentTeam": {
                    "name": null,
                    "id": "0"
                },
                "photo": "",
                "additionalInfo": {
                    "birthdate": "2002-09-01",
                    "height": "",
                    "weight": "",
                    "position": "2"
                },
                "playerNumber": "44",
                "playerDeparted": "0"
            },
            {
                "playerID": "60323",
                "teamID": 8,
                "firstName": "Leo",
                "lastName": "Castledine",
                "shortName": "L. Castledine",
                "fullName": "Leo Castledine",
                "homeName": "",
                "country": {
                    "name": "England",
                    "id": "251"
                },
                "currentTeam": {
                    "name": null,
                    "id": "0"
                },
                "photo": "",
                "additionalInfo": {
                    "birthdate": "2005-08-20",
                    "height": "175 cm",
                    "weight": "",
                    "position": "3"
                },
                "playerNumber": "54",
                "playerDeparted": "0"
            },
            {
                "playerID": "25936",
                "teamID": 8,
                "firstName": "David Datro",
                "lastName": "Fofana",
                "shortName": "D. Fofana",
                "fullName": "David Datro Fofana",
                "homeName": "",
                "country": {
                    "name": "Cote D'Ivoire",
                    "id": "54"
                },
                "currentTeam": {
                    "name": null,
                    "id": "0"
                },
                "photo": "https://api.statorium.com/media/bearleague/bl1630325832524.png",
                "additionalInfo": {
                    "birthdate": "2002-12-22",
                    "height": "181 cm",
                    "weight": "75 kg",
                    "position": "4"
                },
                "playerNumber": "",
                "playerDeparted": "1"
            },
            {
                "playerID": "63265",
                "teamID": 8,
                "firstName": "Dujuan Odile",
                "lastName": "Richards",
                "shortName": "D. Richards",
                "fullName": "Dujuan Richards",
                "homeName": "Dujuan Odile Richards",
                "country": {
                    "name": "Jamaica",
                    "id": "109"
                },
                "currentTeam": {
                    "name": null,
                    "id": "0"
                },
                "photo": "",
                "additionalInfo": {
                    "birthdate": "2005-11-10",
                    "height": "189 cm",
                    "weight": "",
                    "position": "4"
                },
                "playerNumber": "",
                "playerDeparted": "0"
            }
        ]
    }
}

```

## Thursday 2/8/24

I was able to use the new EPL api to include it in a javacript and html POC. I called the Axios library using CDN, called the get method and put it in an async function and pulled back basic league data into a javascript json object. I used Udemy to walk me through and it all worked. Here are the results in Liveview

![example](/images/2-8-24_axios_get_method.png)


## ChatGPT answer to the question, how to parse json obj buit by axios into chart.js

Certainly! Let's break down the steps to achieve this:

1. **Fetching JSON Data with Axios**:
   To retrieve data from an API endpoint using Axios, you can make a GET request. Here's an example of how to do it:

    ```javascript
    const axios = require('axios');

    async function fetchDataFromApi() {
        try {
            const response = await axios.get('https://api.example.com/data'); // Replace with your API endpoint
            const jsonData = response.data; // Parsed JSON data
            return jsonData;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const apiData = await fetchDataFromApi();
    ```

2. **Creating a Chart with Chart.js**:
   Once you have the JSON data, you can use Chart.js to create a chart. First, make sure you include the Chart.js library in your HTML:

    ```html
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.0/chart.min.js"></script>
    ```

   Next, create an HTML canvas element where you want to render the chart:

    ```html
    <canvas id="myChart"></canvas>
    ```

   Finally, use the fetched JSON data to create your chart. For example, if your data contains labels and values for a bar chart:

    ```javascript
    const ctx = document.getElementById('myChart').getContext('2d');

    const chartData = {
        labels: apiData.labels, // Replace with your actual labels
        datasets: [{
            label: 'My Chart',
            data: apiData.values, // Replace with your actual data values
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        }],
    };

    new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
        },
    });
    ```

   Customize the chart type (e.g., line, bar, pie) and styling according to your needs.

Remember to replace the placeholder URLs and data with your actual API endpoint and JSON structure. Happy charting! 📊🎉

## Monday 2/12/24

I sucssfully modifed the javascript api call to take variables at the end of the strig including hard copying the api_key and the season since, these won't change.

I put a text input on an HTML form and a submit button. Inputting '8' in the text box and hitting Submit will take that team (chelsea) and append it to the api string along with the 'config' parameter that holds my season and api key.

It works and I can see it in the console log.

![Alt text](images/output_2-12-24.png)

## Wednesday 2/14/24
Did a deep dive to understand what all the javascript is doing and documented.
At this point, the site is using Axios to connect to an API endpoint, bring in the json object, and pull the photo item from the object and display it in an image element in HTML.

## Thursday 2/15/24
Great progress in being able to read data from the API and put it into a table

![Alt text](images/api_to_tbl.png)

## Friday 2/15/24
I added some formatting to the table using inline style tags. I also added a header title to the column of images in the table. Finally, I added an h3 tag that enclosed the team name.

## Monday 2/26/24
Leaving Javascript for now. I decided to re-focus on html/css. I want to take the simple table I built using the sanctorum API and begin to style it using DHL colors as an example. I want to take it a little bit further and see if I can design a site that is interactive, has menu layouts, is organized, receives inputs, etc. I want to create a DHL branded designed site that has Premiere League content. The goal is to envision what a final DHL site for AEMCE might look like and built it.

Today:
- Changed background color of the page to DHL yeller
- Changed the title and subtitles to DHL red
- Centered everything

I did this all in the CSS file.

I also noticed that , when I originally creted the table, I included in-line styling. I'll have to move this to the CSS file.

![Alt text](<images/CSS 2024-02-26 090046.png>)

## Wednesday 2/28/24
Brushed up a little more on CSS to continue to layout the site. One thing I picked up from reviewing the Udemy training was what a **div** and **sp** is and how to use it in conjunction with CSS. It helps to know what an inline element is versus a block element. A block element takes up the whole page from left to right. An inline element takes up less than that and you can fit multiple inline elements on the same "line". Anything you put within a **div** element is essentially grouped together into a block element. It's a way to organize other elements. **sp** does the same but for inline elements.

Next, I'd like to take my three header elements and put them into **divs** or **sps** to play around with how to organize and layout the first part of my site. Also, play with CSS properties such as border colors, styles, etc.

## Thursday 2/29/24 (leapyear)
Played around a little with border and padding on the input text and button on the form using CSS properties. I put both of these in a div. Although, while both the header elements and this div element content are both block, they aren't rendering on the page the same way. The headers aren't spannning across the page but, are centered as if I've defined ad width and height. The inputbox and button are acting like a block element and spanning the whole width of the page. I think I'll begin to reference the HTML/CSS book I have to work more on the layout.

## Friday 3/1/24
Starting to learn about boostrap, which I want to use to help me layout my site. I reviewed videos #122 and #123 just to get started.

## Monday 3/4/24
All I did today was watch video #124 and included the bootstrap main css CDN and the accompanying javascript libraries and I inlcluded both in the index.html.


