// Define the order of building IDs for each sorting category
// Each category is now an array of sections: { title: string, ids: string[] }

export const sortOrders = {
  // Sort by: Students' Familiarity / Traffic
  students: [
    {
      title: "🌋 Tier 1: The \"General Ed\" Giants",
      ids: ['dwinelle', 'wheeler', 'valley_life', 'pimentel', 'evans', 'physics_north']
    },
    {
      title: "💻 Tier 2: Major Hubs",
      ids: ['soda', 'cory', 'etcheverry', 'haas', 'latimer', 'social_sciences', 'bauer_wurster', 'chou', 'lks']
    },
    {
      title: "📚 Tier 3: Study & Student Hubs",
      ids: ['moffitt', 'doe', 'mlk', 'east_asian', 'grimes']
    },
    {
      title: "🏛️ Tier 4: Secondary Academic Buildings",
      ids: ['bancroft', 'lewis', 'hildebrand', 'tan', 'gilman', 'hearst_mining', 'physics_south', 'stephens', 'philosophy', 
            'aapb', 'hertz', 'morrison', 'north_gate', 'goldman_school', 'minor', 'law_building', 'haviland', 'morgan', 
            'mulford', 'giannini', 'wellman', 'berkeley_way_west']
    },
    {
      title: "🏡 Tier 5: Housing",
      ids: ['unit_1', 'unit_2', 'unit_3', 'blackwell', 'foothill', 'clark_kerr', 'stern', 'bowles', 'i_house', 
            'anchor_house', 'martinez', 'jackson_house', 'manville', 'rssb']
    },
    {
      title: "🏃 Tier 6: Athletics & Recreation",
      ids: ['rsf', 'sather_gate', 'campanile', 'stadium', 'haas_pavilion', 'memorial_glade', 'zellerbach', 'bampfa', 
            'tang_center', 'hearst_greek_theatre', 'lower_sproul_garage', 'sproul', 'golden_bear_rec', 'edwards', 
            'hearst_gym', 'spieker', 'legends_aquatic', 'underhill', 'strawberry_canyon']
    },
    {
      title: "🔬 Tier 7: Low Undergraduate Traffic",
      ids: ['university_hall', 'alumni_house', 'cal_hall', 'south_hall', 'durant', 'anthony', 'campbell', 'birge', 
            'stanley', 'davis', 'mclaughlin', 'obrien', 'sutardja_dai', 'hesse', 'mccone', 'the_gateway', 'koshland', 
            'genetics', 'barker', 'hilgard', 'weill', 'cheit', 'hargrove', 'eshleman', 'cesar_chavez', 'faculty_club', 
            'womens_faculty_club', 'career_engagement', 'lhs', 'lbnl', 'ssl', 'msri', 'calvin', 'igi', 'simon_hall', 
            'donner', 'blulm', 'rfs', 'police', 'a_and_e', '2483_hearst', 'udar', 'senior_hall', 'heating_plant', 
            'hazmat', 'greenhouse_oxford', 'insectary', 'child_study', 'haste_child_dev', 'botanical_garden', 
            'founders_rock', 'class_of_1914', 'west_gate', 'bart', 'rsf_garage', 'ellsworth_parking', 'stadium_parking', 
            'underhill_parking', 'foothill_parking']
    }
  ],

  // Sort by: Academic Category (e.g., Humanities -> STEM -> Engineering -> Design)
  categorical: [
    {
      title: "1. Academic - General & Humanities",
      ids: ['dwinelle', 'wheeler', 'social_sciences', 'evans', 'stephens', 'philosophy', 'south_hall', 'cal_hall', 'durant', 'anthony']
    },
    {
      title: "2. Academic - STEM",
      ids: ['soda', 'cory', 'etcheverry', 'jacobs', 'valley_life', 'lks', 'pimentel', 'physics_north', 'physics_south', 
            'lewis', 'latimer', 'hildebrand', 'tan', 'gilman', 'giauque', 'campbell', 'birge', 'stanley', 'davis', 
            'mclaughlin', 'obrien', 'hearst_mining', 'sutardja_dai', 'hesse', 'mccone', 'the_gateway', 'berkeley_way_west', 
            'koshland', 'genetics', 'barker', 'morgan', 'mulford', 'hilgard', 'wellman', 'giannini', 'weill']
    },
    {
      title: "3. Academic - Arts & Design",
      ids: ['bauer_wurster', 'hertz', 'morrison', 'aapb', 'north_gate', 'bampfa']
    },
    {
      title: "4. Professional Schools",
      ids: ['haas', 'chou', 'cheit', 'law_building', 'minor', 'haviland', 'goldman_school']
    },
    {
      title: "5. Libraries",
      ids: ['moffitt', 'doe', 'bancroft', 'east_asian', 'grimes', 'hargrove']
    },
    {
      title: "6. Campus Life",
      ids: ['mlk', 'eshleman', 'cesar_chavez', 'zellerbach', 'sproul', 'alumni_house', 'faculty_club', 'womens_faculty_club', 'tang_center', 'career_engagement']
    },
    {
      title: "7. Housing",
      ids: ['unit_1', 'unit_2', 'unit_3', 'blackwell', 'foothill', 'stern', 'bowles', 'clark_kerr', 'anchor_house', 'i_house', 'martinez', 'jackson_house', 'manville', 'rssb']
    },
    {
      title: "8. Athletics",
      ids: ['stadium', 'haas_pavilion', 'rsf', 'edwards', 'hearst_gym', 'spieker', 'legends_aquatic', 'goldman_field', 'levine_fricke', 'maxwell_field', 'underhill', 'strawberry_canyon', 'golden_bear_rec']
    },
    {
      title: "9. Research",
      ids: ['lhs', 'lbnl', 'ssl', 'msri', 'calvin', 'igi', 'simon_hall', 'donner', 'blulm', 'rfs']
    },
    {
      title: "10. Admin & Services",
      ids: ['university_hall', 'police', 'a_and_e', '2483_hearst', 'udar', 'senior_hall', 'heating_plant', 'hazmat', 'greenhouse_oxford', 'insectary', 'child_study', 'haste_child_dev']
    },
    {
      title: "11. Landmarks",
      ids: ['campanile', 'sather_gate', 'memorial_glade', 'founders_rock', 'hearst_greek_theatre', 'botanical_garden', 'class_of_1914', 'west_gate']
    },
    {
      title: "12. Parking & Transport",
      ids: ['lower_sproul_garage', 'rsf_garage', 'ellsworth_parking', 'stadium_parking', 'underhill_parking', 'foothill_parking', 'bart']
    }
  ],

  // Sort by: Popularity / General Fame
  popularity: [
    {
      title: "🔥 Most Popular & Iconic",
      ids: ['bauer_wurster', 'bampfa', 'berkeley_way_west', 'blackwell', 'east_asian', 'stadium', 'chou', 'clark_kerr', 
            'cory', 'doe', 'bart', 'dwinelle', 'etcheverry', 'evans', 'haas_pavilion', 'haas', 'hearst_greek_theatre', 
            'hearst_mining', 'anchor_house', 'i_house', 'jacobs', 'lhs', 'lks', 'mlk', 'memorial_glade', 'moffitt', 
            'physics_north', 'pimentel', 'rsf', 'sather_gate', 'campanile', 'soda', 'sproul', 'social_sciences', 
            'botanical_garden', 'unit_1', 'unit_2', 'unit_3', 'tang_center', 'valley_life', 'wheeler', 'zellerbach']
    },
    {
      title: "📍 Other Campus Buildings",
      ids: ['2483_hearst', 'alumni_house', 'aapb', 'anthony', 'a_and_e', 'bancroft', 'barker', 'birge', 'blum', 'bowles', 
            'cal_hall', 'calvin', 'campbell', 'career_engagement', 'heating_plant', 'cheit', 'class_of_1914', 'cesar_chavez', 
            'davis', 'donner', 'durant', 'edwards', 'ellsworth_parking', 'eshleman', 'foothill_parking', 'foothill', 
            'founders_rock', 'genetics', 'giannini', 'giauque', 'gilman', 'golden_bear_rec', 'goldman_field', 'goldman_school', 
            'hargrove', 'child_study', 'haste_child_dev', 'haviland', 'hazmat', 'hearst_gym', 'hertz', 'hesse', 'hildebrand', 
            'hilgard', 'jackson_house', 'igi', 'insectary', 'koshland', 'grimes', 'latimer', 'lbnl', 'legends_aquatic', 
            'levine_fricke', 'lewis', 'lower_sproul_garage', 'manville', 'martinez', 'msri', 'maxwell_field', 'mccone', 
            'mclaughlin', 'minor', 'morgan', 'morrison', 'mulford', 'north_gate', 'obrien', 'greenhouse_oxford', 'philosophy', 
            'physics_south', 'rsf_garage', 'rssb', 'rfs', 'senior_hall', 'simon_hall', 'south_hall', 'ssl', 'spieker', 
            'stadium_parking', 'stanley', 'stephens', 'stern', 'strawberry_canyon', 'sutardja_dai', 'tan', 'faculty_club', 
            'the_gateway', 'law_building', 'police', 'underhill', 'underhill_parking', 'udar', 'university_hall', 'weill', 
            'wellman', 'west_gate', 'womens_faculty_club']
    }
  ]
};
