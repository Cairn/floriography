export interface Flower {
  name: string;
  latin: string;
  image: string;
  poem: string;
  poet: string;
  year: number;
  work?: string;
}

export const flowers: Flower[] = [
  {
    name: "Daffodil",
    latin: "Narcissus pseudonarcissus",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Narcissus_pseudonarcissus_flower_300303.jpg/960px-Narcissus_pseudonarcissus_flower_300303.jpg",
    poem: "I wandered lonely as a cloud\nThat floats on high o\u2019er vales and hills,\nWhen all at once I saw a crowd,\nA host, of golden daffodils;\nBeside the lake, beneath the trees,\nFluttering and dancing in the breeze.",
    poet: "William Wordsworth",
    year: 1807,
    work: "I Wandered Lonely as a Cloud",
  },
  {
    name: "Rose",
    latin: "Rosa gallica",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Wild_Rosa_gallica_Romania.jpg/960px-Wild_Rosa_gallica_Romania.jpg",
    poem: "What\u2019s in a name? that which we call a rose\nBy any other name would smell as sweet.",
    poet: "William Shakespeare",
    year: 1597,
    work: "Romeo and Juliet, Act II, Scene II",
  },
  {
    name: "Poppy",
    latin: "Papaver rhoeas",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Poppies_in_the_Sunset_on_Lake_Geneva.jpg/960px-Poppies_in_the_Sunset_on_Lake_Geneva.jpg",
    poem: "In Flanders fields the poppies blow\nBetween the crosses, row on row,\nThat mark our place; and in the sky\nThe larks, still bravely singing, fly\nScarce heard amid the guns below.",
    poet: "John McCrae",
    year: 1915,
    work: "In Flanders Fields",
  },
  {
    name: "Sunflower",
    latin: "Helianthus annuus",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sunflower_sky_backdrop.jpg/960px-Sunflower_sky_backdrop.jpg",
    poem: "Ah Sun-flower! weary of time,\nWho countest the steps of the Sun,\nSeeking after that sweet golden clime\nWhere the traveller\u2019s journey is done.",
    poet: "William Blake",
    year: 1794,
    work: "Ah! Sun-flower",
  },
  {
    name: "Lily",
    latin: "Lilium candidum",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/ShoshanTzachor-2-wiki-Zachi-Evenor.jpg/960px-ShoshanTzachor-2-wiki-Zachi-Evenor.jpg",
    poem: "The modest Rose puts forth a thorn,\nThe humble sheep a threatening horn;\nWhile the Lily white shall in love delight,\nNor a thorn nor a threat stain her beauty bright.",
    poet: "William Blake",
    year: 1794,
    work: "The Lily",
  },
  {
    name: "Marigold",
    latin: "Calendula officinalis",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Calendula_officinalis%2C_pot_marigold.JPG/960px-Calendula_officinalis%2C_pot_marigold.JPG",
    poem: "The marigold, that goes to bed wi\u2019 th\u2019 sun,\nAnd with him rises weeping.",
    poet: "William Shakespeare",
    year: 1611,
    work: "The Winter\u2019s Tale, Act IV, Scene III",
  },
  {
    name: "Daisy",
    latin: "Bellis perennis",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bellis_perennis_sl1.jpg/960px-Bellis_perennis_sl1.jpg",
    poem: "Bright flower! whose home is everywhere,\nPilgrim of Nature, whom no change can frighten,\nThou smilest at the rage of blowing weather,\nAnd stoop\u2019st to tempt the noon-tide\u2019s silent feather.",
    poet: "William Wordsworth",
    year: 1802,
    work: "To the Daisy",
  },
  {
    name: "Primrose",
    latin: "Primula vulgaris",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Prole%C4%87no_cve%C4%87e_3.JPG/960px-Prole%C4%87no_cve%C4%87e_3.JPG",
    poem: "A primrose by a river\u2019s brim\nA yellow primrose was to him,\nAnd it was nothing more.",
    poet: "William Wordsworth",
    year: 1819,
    work: "Peter Bell",
  },
  {
    name: "Cherry Blossom",
    latin: "Prunus serrulata",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Cerisier_du_Japon_Prunus_serrulata.jpg/960px-Cerisier_du_Japon_Prunus_serrulata.jpg",
    poem: "Loveliest of trees, the cherry now\nIs hung with bloom along the bough,\nAnd stands about the woodland ride\nWearing white for Eastertide.",
    poet: "A.E. Housman",
    year: 1896,
    work: "A Shropshire Lad, II",
  },
  {
    name: "Bluebell",
    latin: "Hyacinthoides non-scripta",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Hyacinthoides_non-scripta_%28Common_Bluebell%29.jpg/960px-Hyacinthoides_non-scripta_%28Common_Bluebell%29.jpg",
    poem: "The Bluebell is the sweetest flower\nThat waves in summer air;\nIts blossoms have the mightiest power\nTo soothe my spirit\u2019s care.",
    poet: "Emily Bront\u00eb",
    year: 1846,
  },
  {
    name: "Violet",
    latin: "Viola odorata",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Viola_odorata_fg01.JPG/960px-Viola_odorata_fg01.JPG",
    poem: "There is a flower that without fail\nBlooms in the garden of the tale;\nIt breathes a fragrance most divine,\nThe sweetest violet, \u2019tis the sign.",
    poet: "Christina Rossetti",
    year: 1893,
  },
  {
    name: "Honeysuckle",
    latin: "Lonicera periclymenum",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/European_honeysuckle_800.jpg",
    poem: "The honeysuckle \u2019round the porch has wov\u2019n its tassels,\nIts crimson trumpets all a-blow;\nAnd perfumed zephyrs are the messengers\nThat call the blinking bees to come and go.",
    poet: "James Whitcomb Riley",
    year: 1883,
  },
];
