from flask import Flask, render_template, jsonify, redirect
import pymongo
from nba_scrape import nba_scrape

app = Flask(__name__)

conn = 'mongodb://localhost:27017'
client = pymongo.MongoClient(conn)
db = client.nba_stats

# Home
@app.route('/')
def index():
    return render_template('index.html')

# Run Scrape Function (takes between 5-10 minutes to run)
@app.route('/scrape')
def insertInDB():
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
# example: http://127.0.0.1:5000/basic/James/LeBron
@app.route('/regular/basic/<playerLN>/<playerFN>/')
def reg_basic_player(playerLN, playerFN):
    playerName = playerFN + " " + playerLN
    stats_json = db.reg_basic.find({'name': playerName}, { '_id': 0})
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
@app.route('/regular/adv/<playerLN>/<playerFN>/')
def reg_adv_player(playerLN, playerFN):
    playerName = playerFN + " " + playerLN
    stats_json = db.reg_adv.find({'name': playerName}, { '_id': 0})
    for stat in stats_json:
        stat_json = stat
    return jsonify(stat_json)

# Regular Season Q1 filtered for particular player
@app.route('/regular/q1/<playerLN>/<playerFN>/')
def reg_q1_player(playerLN, playerFN):
    playerName = playerFN + " " + playerLN
    stats_json = db.reg_q1_shot.find({'name': playerName}, { '_id': 0})
    for stat in stats_json:
        stat_json = stat
    return jsonify(stat_json)

# Regular Season Q2 filtered for particular player
@app.route('/regular/q2/<playerLN>/<playerFN>/')
def reg_q2_player(playerLN, playerFN):
    playerName = playerFN + " " + playerLN
    stats_json = db.reg_q2_shot.find({'name': playerName}, { '_id': 0})
    for stat in stats_json:
        stat_json = stat
    return jsonify(stat_json)

# Regular Season Q3 filtered for particular player
@app.route('/regular/q3/<playerLN>/<playerFN>/')
def reg_q3_player(playerLN, playerFN):
    playerName = playerFN + " " + playerLN
    stats_json = db.reg_q4_shot.find({'name': playerName}, { '_id': 0})
    for stat in stats_json:
        stat_json = stat
    return jsonify(stat_json)

# Regular Season Q4 filtered for particular player
@app.route('/regular/q4/<playerLN>/<playerFN>/')
def reg_q4_player(playerLN, playerFN):
    playerName = playerFN + " " + playerLN
    stats_json = db.reg_ot_shot.find({'name': playerName}, { '_id': 0})
    for stat in stats_json:
        stat_json = stat
    return jsonify(stat_json)

# Regular Season OT filtered for particular player
@app.route('/regular/ot/<playerLN>/<playerFN>/')
def reg_ot_player(playerLN, playerFN):
    playerName = playerFN + " " + playerLN
    stats_json = db.reg_ot_shot.find({'name': playerName}, { '_id': 0})
    for stat in stats_json:
        stat_json = stat
    return jsonify(stat_json)

# Regular Season Clutch Stats (Last 5 mins in close game) filtered for particular player
@app.route('/regular/clutch/<playerLN>/<playerFN>/')
def reg_clutch_player(playerLN, playerFN):
    playerName = playerFN + " " + playerLN
    stats_json = db.reg_clutch.find({'name': playerName}, { '_id': 0})
    for stat in stats_json:
        stat_json = stat
    return jsonify(stat_json)

# Regular Season Shot Zones filtered for particular player
@app.route('/regular/zones/<playerLN>/<playerFN>/')
def reg_zones_player(playerLN, playerFN):
    playerName = playerFN + " " + playerLN
    stats_json = db.reg_shot_zone.find({'name': playerName}, { '_id': 0})
    for stat in stats_json:
        stat_json = stat
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

@app.route('/playoffs/basic/<playerLN>/<playerFN>/')
def po_basic_player(playerLN, playerFN):
    playerName = playerFN + " " + playerLN
    stats_json = db.po_basic.find({'name': playerName}, { '_id': 0})
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
# example: http://127.0.0.1:5000/adv/James/LeBron
@app.route('/playoffs/adv/<playerLN>/<playerFN>/')
def po_adv_player(playerLN, playerFN):
    playerName = playerFN + " " + playerLN
    stats_json = db.po_adv.find({'name': playerName}, { '_id': 0})
    for stat in stats_json:
        stat_json = stat
    return jsonify(stat_json)

# Regular Season Q1 filtered for particular player

@app.route('/playoffs/q1/<playerLN>/<playerFN>/')
def po_q1_player(playerLN, playerFN):
    playerName = playerFN + " " + playerLN
    stats_json = db.po_q1_shot.find({'name': playerName}, { '_id': 0})
    for stat in stats_json:
        stat_json = stat
    return jsonify(stat_json)

# Regular Season Q2 filtered for particular player

@app.route('/playoffs/q2/<playerLN>/<playerFN>/')
def po_q2_player(playerLN, playerFN):
    playerName = playerFN + " " + playerLN
    stats_json = db.po_q2_shot.find({'name': playerName}, { '_id': 0})
    for stat in stats_json:
        stat_json = stat
    return jsonify(stat_json)

# Regular Season Q3 filtered for particular player

@app.route('/playoffs/q3/<playerLN>/<playerFN>/')
def po_q3_player(playerLN, playerFN):
    playerName = playerFN + " " + playerLN
    stats_json = db.po_q3_shot.find({'name': playerName}, { '_id': 0})
    for stat in stats_json:
        stat_json = stat
    return jsonify(stat_json)

# Regular Season Q4 filtered for particular player

@app.route('/playoffs/q4/<playerLN>/<playerFN>/')
def po_q4_player(playerLN, playerFN):
    playerName = playerFN + " " + playerLN
    stats_json = db.po_q4_shot.find({'name': playerName}, { '_id': 0})
    for stat in stats_json:
        stat_json = stat
    return jsonify(stat_json)

# Regular Season OT filtered for particular player
@app.route('/playoffs/ot/<playerLN>/<playerFN>/')
def po_ot_player(playerLN, playerFN):
    playerName = playerFN + " " + playerLN
    stats_json = db.po_ot_shot.find({'name': playerName}, { '_id': 0})
    for stat in stats_json:
        stat_json = stat
    return jsonify(stat_json)

# Regular Season Clutch Stats (Last 5 mins in close game) filtered for particular player

@app.route('/playoffs/clutch/<playerLN>/<playerFN>/')
def po_clutch_player(playerLN, playerFN):
    playerName = playerFN + " " + playerLN
    stats_json = db.po_clutch.find({'name': playerName}, { '_id': 0})
    for stat in stats_json:
        stat_json = stat
    return jsonify(stat_json)

# Regular Season Shot Zones filtered for particular player

@app.route('/playoffs/zones/<playerLN>/<playerFN>/')
def po_zones_player(playerLN, playerFN):
    playerName = playerFN + " " + playerLN
    stats_json = db.po_shot_zone.find({'name': playerName}, { '_id': 0})
    for stat in stats_json:
        stat_json = stat
    return jsonify(stat_json)
    
if __name__ == "__main__":
    app.run(debug=True)