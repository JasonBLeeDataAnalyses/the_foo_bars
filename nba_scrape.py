#dependencies
import pandas as pd
from splinter import Browser
from bs4 import BeautifulSoup
import requests
import numpy as np
import time
import json

def nba_scrape():
    # Regular Season Shot Zones and Percentages
    reg_basic_url = "http://stats.nba.com/players/traditional/?sort=PTS&dir=-1&Season=2017-18&SeasonType=Regular%20Season"
    executable_path = {'executable_path': 'chromedriver.exe'}
    browser = Browser('chrome', **executable_path, headless = False)
    browser.visit(reg_basic_url)
    try:
        browser.find_option_by_text("All").first.click()
    except:
        browser.find_option_by_text("All").first.click()
    time.sleep(10)
    reg_basic_html = browser.html
    reg_basic_soup = BeautifulSoup(reg_basic_html, 'html.parser')
    reg_basic_table = reg_basic_soup.findAll("tbody")[0].findAll("tr")
    reg_basic_list = []
    for players in reg_basic_table:
        player = players.findAll('td')
        try:
            reg_basic_dict = {
                "name": player[1].text,
                "team": player[2].text,
                "age": player[3].text,
                "gp": player[4].text,
                "wins": player[5].text,
                "losses": player[6].text,
                "min": player[7].text,
                "pts": player[8].text,
                "fgm": player[9].text,
                "fga": player[10].text,
                "fgp": player[11].text,
                "3pm": player[12].text,
                "3pa": player[13].text,
                "3pp": player[14].text,
                "ftm": player[15].text,
                "fta": player[16].text,
                "ft%": player[17].text,
                "orb": player[18].text,
                "drb": player[19].text,
                "reb": player[20].text,
                "ast": player[21].text,
                "tov": player[22].text,
                "stl": player[23].text,
                "blk": player[24].text,
                "pf": player[25].text,
                "fp": player[26].text,
                "dd2": player[27].text,
                "td3": player[28].text,
                "pm": player[29].text
            }
        except:
            continue
        reg_basic_list.append(reg_basic_dict)
    # print (len(reg_basic_list))
    # print(reg_basic_list)
    # In[21]:
    # Advanced Regular Season Stats from Basketball Reference
    reg_adv_url = "http://stats.nba.com/players/advanced/?sort=GP&dir=-1&Season=2017-18&SeasonType=Regular%20Season"
    executable_path = {'executable_path': 'chromedriver.exe'}
    browser = Browser('chrome', **executable_path, headless = False)
    browser.visit(reg_adv_url)
    try:
        browser.find_option_by_text("All").first.click()
    except:
        browser.find_option_by_text("All").first.click()
    time.sleep(10)
    reg_adv_html = browser.html
    reg_adv_soup = BeautifulSoup(reg_adv_html, 'html.parser')
    reg_adv_table = reg_adv_soup.findAll("tbody")[0].findAll("tr")
    reg_adv_list = []
    for players in reg_adv_table:
        player = players.findAll('td')
        try:
            reg_adv_dict = {
                "name": player[1].text,
                "team": player[2].text,
                "age": player[3].text,
                "gp": player[4].text,
                "wins": player[5].text,
                "losses": player[6].text,
                "min": player[7].text,
                "ortg": player[8].text,
                "drtg": player[9].text,
                "netrtg": player[10].text,
                "astp": player[11].text,
                "ato": player[12].text,
                "orbp": player[13].text,
                "drbp": player[14].text,
                "toratio": player[15].text,
                "efg": player[16].text,
                "tsp": player[17].text,
                "usg": player[18].text,
                "pace": player[19].text,
                "pie": player[20].text
            }
        except:
            continue
        reg_adv_list.append(reg_adv_dict)
    # print (len(reg_adv_list))
    # print(reg_adv_list)

    # Basic Playoff Stats from Basketball Reference
    po_basic_url = "http://stats.nba.com/players/traditional/?sort=PTS&dir=-1&Season=2017-18&SeasonType=Playoffs"
    executable_path = {'executable_path': 'chromedriver.exe'}
    browser = Browser('chrome', **executable_path, headless = False)
    browser.visit(po_basic_url)
    try:
        browser.find_option_by_text("All").first.click()
    except:
        browser.find_option_by_text("All").first.click()
    time.sleep(10)
    po_basic_html = browser.html
    po_basic_soup = BeautifulSoup(po_basic_html, 'html.parser')
    po_basic_table = po_basic_soup.findAll("tbody")[0].findAll("tr")
    po_basic_list = []
    for players in po_basic_table:
        player = players.findAll('td')
        try:
            po_basic_dict = {
                "name": player[1].text,
                "team": player[2].text,
                "age": player[3].text,
                "gp": player[4].text,
                "wins": player[5].text,
                "losses": player[6].text,
                "min": player[7].text,
                "pts": player[8].text,
                "fgm": player[9].text,
                "fga": player[10].text,
                "fgp": player[11].text,
                "3pm": player[12].text,
                "3pa": player[13].text,
                "3pp": player[14].text,
                "ftm": player[15].text,
                "fta": player[16].text,
                "ft%": player[17].text,
                "orb": player[18].text,
                "drb": player[19].text,
                "reb": player[20].text,
                "ast": player[21].text,
                "tov": player[22].text,
                "stl": player[23].text,
                "blk": player[24].text,
                "pf": player[25].text,
                "fp": player[26].text,
                "dd2": player[27].text,
                "td3": player[28].text,
                "pm": player[29].text
            }
        except:
            continue
        po_basic_list.append(po_basic_dict)
    # print (len(po_basic_list))
    # print(po_basic_list)

    # Advanced Playoff Stats from Basketball Reference
    po_adv_url = "http://stats.nba.com/players/advanced/?sort=GP&dir=-1&Season=2017-18&SeasonType=Playoffs"
    executable_path = {'executable_path': 'chromedriver.exe'}
    browser = Browser('chrome', **executable_path, headless = False)
    browser.visit(po_adv_url)
    try:
        browser.find_option_by_text("All").first.click()
    except:
        browser.find_option_by_text("All").first.click()
    time.sleep(10)
    po_adv_html = browser.html
    po_adv_soup = BeautifulSoup(po_adv_html, 'html.parser')
    po_adv_table = po_adv_soup.findAll("tbody")[0].findAll("tr")
    po_adv_list = []
    for players in po_adv_table:
        player = players.findAll('td')
        try:
            po_adv_dict = {
                "name": player[1].text,
                "team": player[2].text,
                "age": player[3].text,
                "gp": player[4].text,
                "wins": player[5].text,
                "losses": player[6].text,
                "min": player[7].text,
                "ortg": player[8].text,
                "drtg": player[9].text,
                "netrtg": player[10].text,
                "astp": player[11].text,
                "ato": player[12].text,
                "orbp": player[13].text,
                "drbp": player[14].text,
                "toratio": player[15].text,
                "efg": player[16].text,
                "tsp": player[17].text,
                "usg": player[18].text,
                "pace": player[19].text,
                "pie": player[20].text
            }
        except:
            continue
        po_adv_list.append(po_adv_dict)
    # print (len(po_adv_list))
    # print(po_adv_list)

    # Regular Season Shot Zones and Percentages
    reg_shot_zone_url = "https://stats.nba.com/players/shooting/?Season=2017-18&SeasonType=Regular%20Season&DistanceRange=By%20Zone&PerMode=Totals"
    executable_path = {'executable_path': 'chromedriver.exe'}
    browser = Browser('chrome', **executable_path, headless = False)
    browser.visit(reg_shot_zone_url)
    try:
        browser.find_option_by_text("All").first.click()
    except:
        browser.find_option_by_text("All").first.click()
    time.sleep(10)
    reg_shot_zone_html = browser.html
    reg_shot_zone_soup = BeautifulSoup(reg_shot_zone_html, 'html.parser')
    reg_shot_zone_table = reg_shot_zone_soup.findAll("tbody")[0].findAll("tr")
    reg_shot_zone_list = []
    for players in reg_shot_zone_table:
        player = players.findAll('td')
        try:
            reg_shot_zone_dict = {
                "name": player[0].text,
                "team": player[1].text,
                "age": player[2].text,
                "rafgm": player[3].text,
                "rafga": player[4].text,
                "rafgp": player[5].text,
                "paintfgm": player[6].text,
                "paintfga": player[7].text,
                "paintfgp": player[8].text,
                "mrfgm": player[9].text,
                "mrfga": player[10].text,
                "mrfgp": player[11].text,
                "lcfgm": player[12].text,
                "lcfga": player[13].text,
                "lcfgp": player[14].text,
                "rcfgm": player[15].text,
                "rcfga": player[16].text,
                "rcfgp": player[17].text,
                "atbfgm": player[18].text,
                "atbfga": player[19].text,
                "atbfgp": player[20].text,
            }
        except:
            continue
        reg_shot_zone_list.append(reg_shot_zone_dict)
    rszl_index = int(len(reg_shot_zone_list)/2)
    reg_shot_zone_list = reg_shot_zone_list[rszl_index:]
    # print (len(reg_shot_zone_list))
    # print(reg_shot_zone_list)

    # Playoff Shot Zones
    po_shot_zone_url = "https://stats.nba.com/players/shooting/?Season=2017-18&SeasonType=Playoffs&DistanceRange=By%20Zone&PerMode=Totals"
    executable_path = {'executable_path': 'chromedriver.exe'}
    browser = Browser('chrome', **executable_path, headless = False)
    browser.visit(po_shot_zone_url)
    try:
        browser.find_option_by_text("All").first.click()
    except:
        browser.find_option_by_text("All").first.click()
    time.sleep(10)
    po_shot_zone_html = browser.html
    po_shot_zone_soup = BeautifulSoup(po_shot_zone_html, 'html.parser')
    po_shot_zone_table = po_shot_zone_soup.findAll("tbody")[0].findAll("tr")
    po_shot_zone_list = []
    for players in po_shot_zone_table:
        player = players.findAll('td')
        try:
            po_shot_zone_dict = {
                "name": player[0].text,
                "team": player[1].text,
                "age": player[2].text,
                "rafgm": player[3].text,
                "rafma": player[4].text,
                "rafgp": player[5].text,
                "paintfgm": player[6].text,
                "paintfga": player[7].text,
                "paintfgp": player[8].text,
                "mrfgm": player[9].text,
                "mrfga": player[10].text,
                "mrfgp": player[11].text,
                "lcfgm": player[12].text,
                "lcfga": player[13].text,
                "lcfgp": player[14].text,
                "rcfgm": player[15].text,
                "rcfga": player[16].text,
                "rcfgp": player[17].text,
                "atbfgm": player[18].text,
                "atbfga": player[19].text,
                "atbfgp": player[20].text,
            }
        except:
            continue
        po_shot_zone_list.append(po_shot_zone_dict)
    pszl_index = int(len(po_shot_zone_list)/2)
    po_shot_zone_list = po_shot_zone_list[pszl_index:]
    # print(len(po_shot_zone_list))
    # print(po_shot_zone_list)

    # Regular Season 1st Quarter Shots
    q1_shot_url = "https://stats.nba.com/players/shots-general/?Season=2017-18&SeasonType=Regular%20Season&PerMode=Totals&Period=1"
    executable_path = {'executable_path': 'chromedriver.exe'}
    browser = Browser('chrome', **executable_path, headless = False)
    browser.visit(q1_shot_url)
    try:
        browser.find_option_by_text("All").first.click()
    except:
        browser.find_option_by_text("All").first.click()
    time.sleep(10)
    q1_shot_html = browser.html
    q1_shot_soup = BeautifulSoup(q1_shot_html, 'html.parser')
    q1_shot_table = q1_shot_soup.findAll("tbody")[0].findAll("tr")
    q1_shot_list = []
    for players in q1_shot_table:
        player = players.findAll('td')
        try:
            q1_shot_dict = {
                "name": player[0].text,
                "team": player[1].text,
                "age": player[2].text,
                "gp": player[3].text,
                "g": player[4].text,
                "fgfreq": player[5].text,
                "fgm": player[6].text,
                "fga": player[7].text,
                "fgp": player[8].text,
                "efgp": player[9].text,
                "2fgfreq": player[10].text,
                "2fgm": player[11].text,
                "2fga": player[12].text,
                "2fgp": player[13].text,
                "3pfreq": player[14].text,
                "3pm": player[15].text,
                "3pa": player[16].text,
                "3pp": player[17].text
            }
        except:
            continue
        q1_shot_list.append(q1_shot_dict)
    # print (len(q1_shot_list))
    # print(q1_shot_list)

    # Regular Season 2nd Quarter Shots
    q2_shot_url = "https://stats.nba.com/players/shots-general/?Season=2017-18&SeasonType=Regular%20Season&PerMode=Totals&Period=2"
    executable_path = {'executable_path': 'chromedriver.exe'}
    browser = Browser('chrome', **executable_path, headless = False)
    browser.visit(q2_shot_url)
    try:
        browser.find_option_by_text("All").first.click()
    except:
        browser.find_option_by_text("All").first.click()
    time.sleep(10)
    q2_shot_html = browser.html
    q2_shot_soup = BeautifulSoup(q2_shot_html, 'html.parser')
    q2_shot_table = q2_shot_soup.findAll("tbody")[0].findAll("tr")
    q2_shot_list = []
    for players in q2_shot_table:
        player = players.findAll('td')
        try:
            q2_shot_dict = {
                "name": player[0].text,
                "team": player[1].text,
                "age": player[2].text,
                "gp": player[3].text,
                "g": player[4].text,
                "fgfreq": player[5].text,
                "fgm": player[6].text,
                "fga": player[7].text,
                "fgp": player[8].text,
                "efgp": player[9].text,
                "2fgfreq": player[10].text,
                "2fgm": player[11].text,
                "2fga": player[12].text,
                "2fgp": player[13].text,
                "3pfreq": player[14].text,
                "3pm": player[15].text,
                "3pa": player[16].text,
                "3pp": player[17].text
            }
        except:
            continue
        q2_shot_list.append(q2_shot_dict)
    # print (len(q2_shot_list))
    # print(q2_shot_list)

    # Regular Season 3rd Quarter Shots
    q3_shot_url = "https://stats.nba.com/players/shots-general/?Season=2017-18&SeasonType=Regular%20Season&PerMode=Totals&Period=3"
    executable_path = {'executable_path': 'chromedriver.exe'}
    browser = Browser('chrome', **executable_path, headless = False)
    browser.visit(q3_shot_url)
    try:
        browser.find_option_by_text("All").first.click()
    except:
        browser.find_option_by_text("All").first.click()
    time.sleep(10)
    q3_shot_html = browser.html
    q3_shot_soup = BeautifulSoup(q3_shot_html, 'html.parser')
    q3_shot_table = q3_shot_soup.findAll("tbody")[0].findAll("tr")
    q3_shot_list = []
    for players in q3_shot_table:
        player = players.findAll('td')
        try:
            q3_shot_dict = {
                "name": player[0].text,
                "team": player[1].text,
                "age": player[2].text,
                "gp": player[3].text,
                "g": player[4].text,
                "fgfreq": player[5].text,
                "fgm": player[6].text,
                "fga": player[7].text,
                "fgp": player[8].text,
                "efgp": player[9].text,
                "2fgfreq": player[10].text,
                "2fgm": player[11].text,
                "2fga": player[12].text,
                "2fgp": player[13].text,
                "3pfreq": player[14].text,
                "3pm": player[15].text,
                "3pa": player[16].text,
                "3pp": player[17].text
            }
        except:
            continue
        q3_shot_list.append(q3_shot_dict)
    # print (len(q3_shot_list))
    # print(q3_shot_list)

    # Regular Season 4th Quarter Shots
    q4_shot_url = "https://stats.nba.com/players/shots-general/?Season=2017-18&SeasonType=Regular%20Season&PerMode=Totals&Period=4"
    executable_path = {'executable_path': 'chromedriver.exe'}
    browser = Browser('chrome', **executable_path, headless = False)
    browser.visit(q4_shot_url)
    try:
        browser.find_option_by_text("All").first.click()
    except:
        browser.find_option_by_text("All").first.click()    
    time.sleep(10)
    q4_shot_html = browser.html
    q4_shot_soup = BeautifulSoup(q4_shot_html, 'html.parser')
    q4_shot_table = q4_shot_soup.findAll("tbody")[0].findAll("tr")
    q4_shot_list = []
    for players in q4_shot_table:
        player = players.findAll('td')
        try:
            q4_shot_dict = {
                "name": player[0].text,
                "team": player[1].text,
                "age": player[2].text,
                "gp": player[3].text,
                "g": player[4].text,
                "fgfreq": player[5].text,
                "fgm": player[6].text,
                "fga": player[7].text,
                "fgp": player[8].text,
                "efgp": player[9].text,
                "2fgfreq": player[10].text,
                "2fgm": player[11].text,
                "2fga": player[12].text,
                "2fgp": player[13].text,
                "3pfreq": player[14].text,
                "3pm": player[15].text,
                "3pa": player[16].text,
                "3pp": player[17].text
            }
        except:
            continue
        q4_shot_list.append(q4_shot_dict)
    # print (len(q4_shot_list))
    # print(q4_shot_list)

    # Regular Season OT Quarter Shots
    OT_shot_url = "https://stats.nba.com/players/shots-general/?Season=2017-18&SeasonType=Regular%20Season&PerMode=Totals&Period=5"
    executable_path = {'executable_path': 'chromedriver.exe'}
    browser = Browser('chrome', **executable_path, headless = False)
    browser.visit(OT_shot_url)
    try:
        browser.find_option_by_text("All").first.click()
    except:
        browser.find_option_by_text("All").first.click()
    time.sleep(10)
    OT_shot_html = browser.html
    OT_shot_soup = BeautifulSoup(OT_shot_html, 'html.parser')
    OT_shot_table = OT_shot_soup.findAll("tbody")[0].findAll("tr")
    OT_shot_list = []
    for players in OT_shot_table:
        player = players.findAll('td')
        try:
            OT_shot_dict = {
                "name": player[0].text,
                "team": player[1].text,
                "age": player[2].text,
                "gp": player[3].text,
                "g": player[4].text,
                "fgfreq": player[5].text,
                "fgm": player[6].text,
                "fga": player[7].text,
                "fgp": player[8].text,
                "efgp": player[9].text,
                "2fgfreq": player[10].text,
                "2fgm": player[11].text,
                "2fga": player[12].text,
                "2fgp": player[13].text,
                "3pfreq": player[14].text,
                "3pm": player[15].text,
                "3pa": player[16].text,
                "3pp": player[17].text
            }
        except:
            continue
        OT_shot_list.append(OT_shot_dict)
    # print (len(OT_shot_list))
    # print(OT_shot_list)

    # Playoff 1q shots
    PO_1q_shot_url = "https://stats.nba.com/players/shots-general/?Season=2017-18&SeasonType=Playoffs&PerMode=Totals&Period=1"
    executable_path = {'executable_path': 'chromedriver.exe'}
    browser = Browser('chrome', **executable_path, headless = False)
    browser.visit(PO_1q_shot_url)
    try:
        browser.find_option_by_text("All").first.click()
    except:
        browser.find_option_by_text("All").first.click()
    time.sleep(10)
    PO_1q_shot_html = browser.html
    PO_1q_shot_soup = BeautifulSoup(PO_1q_shot_html, 'html.parser')
    PO_1q_shot_table = PO_1q_shot_soup.findAll("tbody")[0].findAll("tr")
    PO_1q_shot_list = []
    for players in PO_1q_shot_table:
        player = players.findAll('td')
        try:
            PO_1q_shot_dict = {
                "name": player[0].text,
                "team": player[1].text,
                "age": player[2].text,
                "gp": player[3].text,
                "g": player[4].text,
                "fgfreq": player[5].text,
                "fgm": player[6].text,
                "fga": player[7].text,
                "fgp": player[8].text,
                "efgp": player[9].text,
                "2fgfreq": player[10].text,
                "2fgm": player[11].text,
                "2fga": player[12].text,
                "2fgp": player[13].text,
                "3pfreq": player[14].text,
                "3pm": player[15].text,
                "3pa": player[16].text,
                "3pp": player[17].text
            }
        except:
            continue
        PO_1q_shot_list.append(PO_1q_shot_dict)
    # print (len(PO_1q_shot_list))
    # print(PO_1q_shot_list)

    # 2q playoff shots
    PO_2q_shot_url = "https://stats.nba.com/players/shots-general/?Season=2017-18&SeasonType=Playoffs&PerMode=Totals&Period=2"
    executable_path = {'executable_path': 'chromedriver.exe'}
    browser = Browser('chrome', **executable_path, headless = False)
    browser.visit(PO_2q_shot_url)
    try:
        browser.find_option_by_text("All").first.click()
    except:
        browser.find_option_by_text("All").first.click()
    time.sleep(10)
    PO_2q_shot_html = browser.html
    PO_2q_shot_soup = BeautifulSoup(PO_2q_shot_html, 'html.parser')
    PO_2q_shot_table = PO_2q_shot_soup.findAll("tbody")[0].findAll("tr")
    PO_2q_shot_list = []
    for players in PO_2q_shot_table:
        player = players.findAll('td')
        try:
            PO_2q_shot_dict = {
                "name": player[0].text,
                "team": player[1].text,
                "age": player[2].text,
                "gp": player[3].text,
                "g": player[4].text,
                "fgfreq": player[5].text,
                "fgm": player[6].text,
                "fga": player[7].text,
                "fgp": player[8].text,
                "efgp": player[9].text,
                "2fgfreq": player[10].text,
                "2fgm": player[11].text,
                "2fga": player[12].text,
                "2fgp": player[13].text,
                "3pfreq": player[14].text,
                "3pm": player[15].text,
                "3pa": player[16].text,
                "3pp": player[17].text
            }
        except:
            continue
        PO_2q_shot_list.append(PO_2q_shot_dict)
    # print (len(PO_2q_shot_list))
    # print(PO_2q_shot_list)

    # 3Q Shots
    PO_3q_shot_url = "https://stats.nba.com/players/shots-general/?Season=2017-18&SeasonType=Playoffs&PerMode=Totals&Period=3"
    executable_path = {'executable_path': 'chromedriver.exe'}
    browser = Browser('chrome', **executable_path, headless = False)
    browser.visit(PO_3q_shot_url)
    try:
        browser.find_option_by_text("All").first.click()
    except:
        browser.find_option_by_text("All").first.click()
    time.sleep(10)
    PO_3q_shot_html = browser.html
    PO_3q_shot_soup = BeautifulSoup(PO_3q_shot_html, 'html.parser')
    PO_3q_shot_table = PO_3q_shot_soup.findAll("tbody")[0].findAll("tr")
    PO_3q_shot_list = []
    for players in PO_3q_shot_table:
        player = players.findAll('td')
        try:
            PO_3q_shot_dict = {
                "name": player[0].text,
                "team": player[1].text,
                "age": player[2].text,
                "gp": player[3].text,
                "g": player[4].text,
                "fgfreq": player[5].text,
                "fgm": player[6].text,
                "fga": player[7].text,
                "fgp": player[8].text,
                "efgp": player[9].text,
                "2fgfreq": player[10].text,
                "2fgm": player[11].text,
                "2fga": player[12].text,
                "2fgp": player[13].text,
                "3pfreq": player[14].text,
                "3pm": player[15].text,
                "3pa": player[16].text,
                "3pp": player[17].text
            }
        except:
            continue
        PO_3q_shot_list.append(PO_3q_shot_dict)
    # print (len(PO_3q_shot_list))
    # print(PO_3q_shot_list)

    # 4Q PO Shot
    PO_4q_shot_url = "https://stats.nba.com/players/shots-general/?Season=2017-18&SeasonType=Playoffs&PerMode=Totals&Period=4"
    executable_path = {'executable_path': 'chromedriver.exe'}
    browser = Browser('chrome', **executable_path, headless = False)
    browser.visit(PO_4q_shot_url)
    try:
        browser.find_option_by_text("All").first.click()
    except:
        browser.find_option_by_text("All").first.click()
    time.sleep(10)
    PO_4q_shot_html = browser.html
    PO_4q_shot_soup = BeautifulSoup(PO_4q_shot_html, 'html.parser')
    PO_4q_shot_table = PO_4q_shot_soup.findAll("tbody")[0].findAll("tr")
    PO_4q_shot_list = []
    for players in PO_4q_shot_table:
        player = players.findAll('td')
        try:
            PO_4q_shot_dict = {
                "name": player[0].text,
                "team": player[1].text,
                "age": player[2].text,
                "gp": player[3].text,
                "g": player[4].text,
                "fgfreq": player[5].text,
                "fgm": player[6].text,
                "fga": player[7].text,
                "fgp": player[8].text,
                "efgp": player[9].text,
                "2fgfreq": player[10].text,
                "2fgm": player[11].text,
                "2fga": player[12].text,
                "2fgp": player[13].text,
                "3pfreq": player[14].text,
                "3pm": player[15].text,
                "3pa": player[16].text,
                "3pp": player[17].text
            }
        except:
            continue
        PO_4q_shot_list.append(PO_4q_shot_dict)
    # print (len(PO_4q_shot_list))
    # print(PO_4q_shot_list)

    # PO OT Shots
    PO_OT_shot_url = "https://stats.nba.com/players/shots-general/?Season=2017-18&SeasonType=Playoffs&PerMode=Totals&Period=5"
    executable_path = {'executable_path': 'chromedriver.exe'}
    browser = Browser('chrome', **executable_path, headless = False)
    browser.visit(PO_OT_shot_url)
    # browser.find_option_by_text("All").first.click()
    time.sleep(10)
    PO_OT_shot_html = browser.html
    PO_OT_shot_soup = BeautifulSoup(PO_OT_shot_html, 'html.parser')
    PO_OT_shot_table = PO_OT_shot_soup.findAll("tbody")[0].findAll("tr")
    PO_OT_shot_list = []
    for players in PO_OT_shot_table:
        player = players.findAll('td')
        try:
            PO_OT_shot_dict = {
                "name": player[0].text,
                "team": player[1].text,
                "age": player[2].text,
                "gp": player[3].text,
                "g": player[4].text,
                "fgfreq": player[5].text,
                "fgm": player[6].text,
                "fga": player[7].text,
                "fgp": player[8].text,
                "efgp": player[9].text,
                "2fgfreq": player[10].text,
                "2fgm": player[11].text,
                "2fga": player[12].text,
                "2fgp": player[13].text,
                "3pfreq": player[14].text,
                "3pm": player[15].text,
                "3pa": player[16].text,
                "3pp": player[17].text
            }
        except:
            continue
        PO_OT_shot_list.append(PO_OT_shot_dict)
    # print (len(PO_OT_shot_list))
    # print(PO_OT_shot_list)

    # Regular Season Clutch Stats (Last 5 minutes in a close game)
    reg_clutch_url = "https://stats.nba.com/players/clutch-traditional/?sort=GP&dir=-1&Season=2017-18&SeasonType=Regular%20Season&PerMode=Totals"
    executable_path = {'executable_path': 'chromedriver.exe'}
    browser = Browser('chrome', **executable_path, headless = False)
    browser.visit(reg_clutch_url)
    try:
        browser.find_option_by_text("All").first.click()
    except:
        browser.find_option_by_text("All").first.click()
    time.sleep(10)
    reg_clutch_html = browser.html
    reg_clutch_soup = BeautifulSoup(reg_clutch_html, 'html.parser')
    reg_clutch_table = reg_clutch_soup.findAll("tbody")[0].findAll("tr")
    reg_clutch_list = []
    for players in reg_clutch_table:
        player = players.findAll('td')
        try:
            reg_clutch_dict = {
                "name": player[1].text,
                "team": player[2].text,
                "age": player[3].text,
                "gp": player[4].text,
                "wins": player[5].text,
                "losses": player[6].text,
                "min": player[7].text,
                "pts": player[8].text,
                "fgm": player[9].text,
                "fga": player[10].text,
                "fgp": player[11].text,
                "3pm": player[12].text,
                "3pa": player[13].text,
                "3pp": player[14].text,
                "ftm": player[15].text,
                "fta": player[16].text,
                "ft%": player[17].text,
                "orb": player[18].text,
                "drb": player[19].text,
                "reb": player[20].text,
                "ast": player[21].text,
                "tov": player[22].text,
                "stl": player[23].text,
                "blk": player[24].text,
                "pf": player[25].text,
                "fp": player[26].text,
                "dd2": player[27].text,
                "td3": player[28].text,
                "pm": player[29].text
            }
        except:
            continue
        reg_clutch_list.append(reg_clutch_dict)
    # print (len(reg_clutch_list))
    # print(reg_clutch_list)

    # Playoff Clutch Stats (last 5 minutes in a close game)
    po_clutch_url = "https://stats.nba.com/players/clutch-traditional/?sort=GP&dir=-1&Season=2017-18&SeasonType=Playoffs&PerMode=Totals"
    executable_path = {'executable_path': 'chromedriver.exe'}
    browser = Browser('chrome', **executable_path, headless = False)
    browser.visit(po_clutch_url)
    try:
        browser.find_option_by_text("All").first.click()
    except:
        browser.find_option_by_text("All").first.click()
    time.sleep(10)
    po_clutch_html = browser.html
    po_clutch_soup = BeautifulSoup(po_clutch_html, 'html.parser')
    po_clutch_table = po_clutch_soup.findAll("tbody")[0].findAll("tr")
    po_clutch_list = []
    for players in po_clutch_table:
        player = players.findAll('td')
        try:
            po_clutch_dict = {
                "name": player[1].text,
                "team": player[2].text,
                "age": player[3].text,
                "gp": player[4].text,
                "wins": player[5].text,
                "losses": player[6].text,
                "min": player[7].text,
                "pts": player[8].text,
                "fgm": player[9].text,
                "fga": player[10].text,
                "fgp": player[11].text,
                "3pm": player[12].text,
                "3pa": player[13].text,
                "3pp": player[14].text,
                "ftm": player[15].text,
                "fta": player[16].text,
                "ft%": player[17].text,
                "orb": player[18].text,
                "drb": player[19].text,
                "reb": player[20].text,
                "ast": player[21].text,
                "tov": player[22].text,
                "stl": player[23].text,
                "blk": player[24].text,
                "pf": player[25].text,
                "fp": player[26].text,
                "dd2": player[27].text,
                "td3": player[28].text,
                "pm": player[29].text
            }
        except:
            continue
        po_clutch_list.append(po_clutch_dict)
    # print (len(po_clutch_list))
    # print(po_clutch_list)
    
    bio_url = "https://stats.nba.com/players/bio/?Season=2017-18&SeasonType=Regular%20Season"
    executable_path = {'executable_path': 'chromedriver.exe'}
    browser = Browser('chrome', **executable_path, headless = False)
    browser.visit(bio_url)
    try:
        browser.find_option_by_text("All").first.click()
    except:
        browser.find_option_by_text("All").first.click()
    time.sleep(10)
    bio_html = browser.html
    bio_soup = BeautifulSoup(bio_html, 'html.parser')
    bio_table = bio_soup.findAll("tbody")[0].findAll("tr")
    # print(bio_table)
    bio_list = []
    for players in bio_table:
        player = players.findAll('td')
    #     print (player)
        try:
            bio_dict = {
                "name": player[0].text,
                "team": player[1].text,
                "age": player[2].text,
                "height": player[3].text,
                "weight": player[4].text,
                "college": player[5].text,
                "country": player[6].text,
                "draftYear": player[7].text,
                "draftRd": player[8].text,
                "draftNo": player[9].text
            }
        except:
            continue
        bio_list.append(bio_dict)

    # total database
    nba_stats = {
        "bio": bio_list,
        "reg_basic": reg_basic_list,
        "reg_adv": reg_adv_list,
        "po_basic": po_basic_list,
        "po_adv": po_adv_list,
        "reg_shot_zone": reg_shot_zone_list,
        "po_shot_zone": po_shot_zone_list,
        "reg_q1_shot": q1_shot_list,
        "reg_q2_shot": q2_shot_list,
        "reg_q3_shot": q3_shot_list,
        "reg_q4_shot": q4_shot_list,
        "reg_clutch": reg_clutch_list,
        "reg_ot_shot": OT_shot_list,
        "po_q1_shot": PO_1q_shot_list,
        "po_q2_shot": PO_2q_shot_list,
        "po_q3_shot": PO_3q_shot_list,
        "po_q4_shot": PO_4q_shot_list,
        "po_clutch": po_clutch_list,
        "po_ot_shot": PO_OT_shot_list
    }

    return nba_stats