from flask import Flask, render_template, jsonify, redirect
import pymongo
from nba_scrape import nba_scrape

app = Flask(__name__)

conn = 'mongodb://mynameisjohnn:foobars@ds135540.mlab.com:35540/heroku_36sw5zp0'
client = pymongo.MongoClient(conn)
db = client.heroku_36sw5zp0

# Home
@app.route('/')
def index():
    return render_template('index.html')

# Run Scrape Function (takes between 5-10 minutes to run)
@app.route('/scrape')
def insertInDB():
    client.drop_database('heroku_36sw5zp0')
    nbaStats = nba_scrape()
    for key, value in nbaStats.items():
        collection = db[key]
        collection.insert_many(value)
    return redirect("/")

# Regular Season Basic Stats for a particular Player
# All Data
@app.route('/regular/basic/')
def reg_basic():
    stat_json = []
    stats_json = db.reg_basic.find({}, { '_id': 0})
    for stat in stats_json:
        stat_json.append(stat)
    return jsonify(stat_json)

# Regular Season Basic Stats filtered for particular player
# example: http://127.0.0.1:5000/basic/LeBron-James
@app.route('/regular/basic/<player_name>/')
def reg_basic_player(player_name):
    player_name = player_name.replace("-"," ")
    stats_json = db.reg_basic.find({'name': player_name}, { '_id': 0})
    for stat in stats_json:
        stat_json = stat
    return jsonify(stat_json)

# Regular Season Advanced Stats for a particular Player
# All Data
@app.route('/regular/adv/')
def reg_adv():
    stat_json = []
    stats_json = db.reg_adv.find({}, { '_id': 0})
    for stat in stats_json:
        stat_json.append(stat)
    return jsonify(stat_json)

# Regular Season Advanced Stats filtered for particular player
@app.route('/regular/adv/<player_name>/')
def reg_adv_player(player_name):
    player_name = player_name.replace("-"," ")
    stats_json = db.reg_adv.find({'name': player_name}, { '_id': 0})
    for stat in stats_json:
        stat_json = stat
    return jsonify(stat_json)

# Regular Season Q1 filtered for particular player
@app.route('/regular/q1/<player_name>/')
def reg_q1_player(player_name):
    player_name = player_name.replace("-"," ")
    stats_json = db.reg_q1_shot.find({'name': player_name}, { '_id': 0})
    for stat in stats_json:
        stat_json = stat
    return jsonify(stat_json)

# Regular Season Q2 filtered for particular player
@app.route('/regular/q2/<player_name>/')
def reg_q2_player(player_name):
    player_name = player_name.replace("-"," ")
    stats_json = db.reg_q2_shot.find({'name': player_name}, { '_id': 0})
    for stat in stats_json:
        stat_json = stat
    return jsonify(stat_json)

# Regular Season Q3 filtered for particular player
@app.route('/regular/q3/<player_name>/')
def reg_q3_player(player_name):
    player_name = player_name.replace("-"," ")
    stats_json = db.reg_q3_shot.find({'name': player_name}, { '_id': 0})
    for stat in stats_json:
        stat_json = stat
    return jsonify(stat_json)

# Regular Season Q4 filtered for particular player
@app.route('/regular/q4/<player_name>/')
def reg_q4_player(player_name):
    player_name = player_name.replace("-"," ")
    stats_json = db.reg_q4_shot.find({'name': player_name}, { '_id': 0})
    for stat in stats_json:
        stat_json = stat
    return jsonify(stat_json)

# Regular Season OT filtered for particular player
@app.route('/regular/ot/<player_name>/')
def reg_ot_player(player_name):
    player_name = player_name.replace("-"," ")
    stats_json = db.reg_ot_shot.find({'name': player_name}, { '_id': 0})
    for stat in stats_json:
        stat_json = stat
    return jsonify(stat_json)

# Regular Season Clutch Stats (Last 5 mins in close game) filtered for particular player
@app.route('/regular/clutch/<player_name>/')
def reg_clutch_player(player_name):
    player_name = player_name.replace("-"," ")
    stats_json = db.reg_clutch.find({'name': player_name}, { '_id': 0})
    for stat in stats_json:
        stat_json = stat
    return jsonify(stat_json)

# Regular Season Shot Zones filtered for particular player
@app.route('/regular/zones/<player_name>/')
def reg_zones_player(player_name):
    player_name = player_name.replace("-"," ")
    stats_json = db.reg_shot_zone.find({'name': player_name}, { '_id': 0})
    for stat in stats_json:
        stat_json = stat
    return jsonify(stat_json)

# Regular Season Shot Zones filtered for particular player
@app.route('/regular/zones/')
def reg_zones():
    stat_json = []
    stats_json = db.reg_shot_zone.find({}, { '_id': 0})
    for stat in stats_json:
        stat_json.append(stat)
    return jsonify(stat_json)

# Regular Season Basic Stats for a particular Player
# All Data
@app.route('/playoffs/basic/')
def po_basic():
    stat_json = []
    stats_json = db.po_basic.find({}, { '_id': 0})
    for stat in stats_json:
        stat_json.append(stat)
    return jsonify(stat_json)

# Regular Season Basic Stats filtered for particular player

@app.route('/playoffs/basic/<player_name>/')
def po_basic_player(player_name):
    player_name = player_name.replace("-"," ")
    stats_json = db.po_basic.find({'name': player_name}, { '_id': 0})
    for stat in stats_json:
        stat_json = stat
    return jsonify(stat_json)

# Regular Season Advanced Stats for a particular Player
# All Data
@app.route('/playoffs/adv/')
def po_adv():
    stat_json = []
    stats_json = db.po_adv.find({}, { '_id': 0})
    for stat in stats_json:
        stat_json.append(stat)
    return jsonify(stat_json)

# Regular Season Advanced Stats filtered for particular player
# example: http://127.0.0.1:5000/adv/LeBron-James
@app.route('/playoffs/adv/<player_name>/')
def po_adv_player(player_name):
    player_name = player_name.replace("-"," ")
    stats_json = db.po_adv.find({'name': player_name}, { '_id': 0})
    for stat in stats_json:
        stat_json = stat
    return jsonify(stat_json)

# Regular Season Q1 filtered for particular player

@app.route('/playoffs/q1/<player_name>/')
def po_q1_player(player_name):
    player_name = player_name.replace("-"," ")
    stats_json = db.po_q1_shot.find({'name': player_name}, { '_id': 0})
    for stat in stats_json:
        stat_json = stat
    return jsonify(stat_json)

# Regular Season Q2 filtered for particular player

@app.route('/playoffs/q2/<player_name>/')
def po_q2_player(player_name):
    player_name = player_name.replace("-"," ")
    stats_json = db.po_q2_shot.find({'name': player_name}, { '_id': 0})
    for stat in stats_json:
        stat_json = stat
    return jsonify(stat_json)

# Regular Season Q3 filtered for particular player

@app.route('/playoffs/q3/<player_name>/')
def po_q3_player(player_name):
    player_name = player_name.replace("-"," ")
    stats_json = db.po_q3_shot.find({'name': player_name}, { '_id': 0})
    for stat in stats_json:
        stat_json = stat
    return jsonify(stat_json)

# Regular Season Q4 filtered for particular player

@app.route('/playoffs/q4/<player_name>/')
def po_q4_player(player_name):
    player_name = player_name.replace("-"," ")
    stats_json = db.po_q4_shot.find({'name': player_name}, { '_id': 0})
    for stat in stats_json:
        stat_json = stat
    return jsonify(stat_json)

# Regular Season OT filtered for particular player
@app.route('/playoffs/ot/<player_name>/')
def po_ot_player(player_name):
    player_name = player_name.replace("-"," ")
    stats_json = db.po_ot_shot.find({'name': player_name}, { '_id': 0})
    for stat in stats_json:
        stat_json = stat
    return jsonify(stat_json)

# Regular Season Clutch Stats (Last 5 mins in close game) filtered for particular player

@app.route('/playoffs/clutch/<player_name>/')
def po_clutch_player(player_name):
    player_name = player_name.replace("-"," ")
    stats_json = db.po_clutch.find({'name': player_name}, { '_id': 0})
    for stat in stats_json:
        stat_json = stat
    return jsonify(stat_json)

# Regular Season Shot Zones filtered for particular player

@app.route('/playoffs/zones/<player_name>/')
def po_zones_player(player_name):
    player_name = player_name.replace("-"," ")
    stats_json = db.po_shot_zone.find({'name': player_name}, { '_id': 0})
    for stat in stats_json:
        stat_json = stat
    return jsonify(stat_json)

@app.route('/bio/<player_name>/')
def bio_player(player_name):
    player_name = player_name.replace("-"," ")
    stats_json = db.bio.find({'name': player_name}, { '_id': 0})
    for stat in stats_json:
        stat_json = stat
    return jsonify(stat_json)

if __name__ == "__main__":
    app.run(debug=True)