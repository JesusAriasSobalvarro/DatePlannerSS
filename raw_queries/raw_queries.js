const get_restaurant_list = `select distinct on (id_place) id_place, place_name, picture_url from dateplanner.places_table INNER JOIN dateplanner.pictures_table ON places_table.id_place = pictures_table.places_table_id_place`
const queries = {}

queries.get_restaurant_list = get_restaurant_list

module.exports = queries