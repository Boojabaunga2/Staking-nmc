// components/NftGallery.js
import React, { useState } from 'react';
import styles from '../components/NftGallery.module.css';


// Make sure to have your styles file

const jsonData =[
    {
        "Elements": "Polybius",
        "Elements Value": "0",
        "Elements ID": "0"
    },
    {
        "Elements": "BariumBurstSyrup",
        "Elements Value": "118",
        "Elements ID": "99"
    },
    {
        "Elements": "Ectoplasmia",
        "Elements Value": "200.002",
        "Elements ID": "100"
    },
    {
        "Elements": "Goofballs",
        "Elements Value": "202",
        "Elements ID": "101"
    },
    {
        "Elements": "Thrageica",
        "Elements Value": "204.04",
        "Elements ID": "102"
    },
    {
        "Elements": "Sugginsmania",
        "Elements Value": "206",
        "Elements ID": "103"
    },
    {
        "Elements": "Blockyfrogium",
        "Elements Value": "208.02",
        "Elements ID": "104"
    },
    {
        "Elements": "Thiefery",
        "Elements Value": "210",
        "Elements ID": "105"
    },
    {
        "Elements": "Hybernatium",
        "Elements Value": "212.04",
        "Elements ID": "106"
    },
    {
        "Elements": "Howlirion",
        "Elements Value": "214",
        "Elements ID": "107"
    },
    {
        "Elements": "Builadam",
        "Elements Value": "216.002",
        "Elements ID": "108"
    },
    {
        "Elements": "Shroomia",
        "Elements Value": "218",
        "Elements ID": "109"
    },
    {
        "Elements": "Bananmelon",
        "Elements Value": "220",
        "Elements ID": "110"
    },
    {
        "Elements": "Athelitica",
        "Elements Value": "222.002",
        "Elements ID": "111"
    },
    {
        "Elements": "Mrrobotoco",
        "Elements Value": "224",
        "Elements ID": "112"
    },
    {
        "Elements": "Whtcnbrwndo4u",
        "Elements Value": "226.02",
        "Elements ID": "113"
    },
    {
        "Elements": "Swordofboojarino",
        "Elements Value": "228",
        "Elements ID": "114"
    },
    {
        "Elements": "Shivyshank",
        "Elements Value": "230.052",
        "Elements ID": "115"
    },
    {
        "Elements": "Andyloverino",
        "Elements Value": "232",
        "Elements ID": "116"
    },
    {
        "Elements": "Branium",
        "Elements Value": "234.002",
        "Elements ID": "117"
    },
    {
        "Elements": "Pixardustilio",
        "Elements Value": "236.004",
        "Elements ID": "118"
    },
    {
        "Elements": "Emokium",
        "Elements Value": "238.02",
        "Elements ID": "119"
    },
    {
        "Elements": "Pengmokium",
        "Elements Value": "240.001",
        "Elements ID": "120"
    },
    {
        "Elements": "Emokittium",
        "Elements Value": "242.001",
        "Elements ID": "121"
    },
    {
        "Elements": "Slomokium",
        "Elements Value": "244.04",
        "Elements ID": "122"
    },
    {
        "Elements": "Antigravitium",
        "Elements Value": "246.004",
        "Elements ID": "123"
    },
    {
        "Elements": "Flapitium",
        "Elements Value": "248",
        "Elements ID": "124"
    },
    {
        "Elements": "Batmonkeyium",
        "Elements Value": "250.002",
        "Elements ID": "125"
    },
    {
        "Elements": "Supermonkeyium",
        "Elements Value": "252.004",
        "Elements ID": "126"
    },
    {
        "Elements": "Beezwaxium",
        "Elements Value": "254.002",
        "Elements ID": "127"
    },
    {
        "Elements": "Dabaloonium",
        "Elements Value": "256.004",
        "Elements ID": "128"
    },
    {
        "Elements": "Llamacornium",
        "Elements Value": "258.001",
        "Elements ID": "129"
    },
    {
        "Elements": "Trexium",
        "Elements Value": "260.004",
        "Elements ID": "130"
    },
    {
        "Elements": "Emooksi",
        "Elements Value": "262.002",
        "Elements ID": "131"
    },
    {
        "Elements": "Duckoski",
        "Elements Value": "264",
        "Elements ID": "132"
    },
    {
        "Elements": "Owloki",
        "Elements Value": "266.004",
        "Elements ID": "133"
    },
    {
        "Elements": "Cheetoki",
        "Elements Value": "268",
        "Elements ID": "134"
    },
    {
        "Elements": "Redpandis",
        "Elements Value": "270.002",
        "Elements ID": "135"
    },
    {
        "Elements": "Herboki",
        "Elements Value": "272",
        "Elements ID": "136"
    },
    {
        "Elements": "Ebunnium",
        "Elements Value": "274.002",
        "Elements ID": "137"
    },
    {
        "Elements": "Banamonkium",
        "Elements Value": "276",
        "Elements ID": "138"
    },
    {
        "Elements": "Sheepatorium",
        "Elements Value": "278.004",
        "Elements ID": "139"
    },
    {
        "Elements": "Hehawokarino",
        "Elements Value": "280",
        "Elements ID": "140"
    },
    {
        "Elements": "Curfishium",
        "Elements Value": "282.002",
        "Elements ID": "141"
    },
    {
        "Elements": "Longnekarite",
        "Elements Value": "284",
        "Elements ID": "142"
    },
    {
        "Elements": "Moomilski",
        "Elements Value": "286.004",
        "Elements ID": "143"
    },
    {
        "Elements": "Chikimokium",
        "Elements Value": "288",
        "Elements ID": "144"
    },
    {
        "Elements": "Ninjagogo",
        "Elements Value": "290",
        "Elements ID": "145"
    },
    {
        "Elements": "Alphabetica",
        "Elements Value": "292.004",
        "Elements ID": "146"
    },
    {
        "Elements": "Snowdoggycryogen",
        "Elements Value": "294",
        "Elements ID": "147"
    },
    {
        "Elements": "Popcornarito",
        "Elements Value": "296.004",
        "Elements ID": "148"
    },
    {
        "Elements": "Toxiccandybarium",
        "Elements Value": "298",
        "Elements ID": "149"
    },
    {
        "Elements": "Mirymotoroto",
        "Elements Value": "300.001",
        "Elements ID": "150"
    },
    {
        "Elements": "Banditorino",
        "Elements Value": "301.09",
        "Elements ID": "151"
    },
    {
        "Elements": "Devohatarino",
        "Elements Value": "304.075",
        "Elements ID": "152"
    },
    {
        "Elements": "Tacobellium",
        "Elements Value": "306",
        "Elements ID": "153"
    },
    {
        "Elements": "Ihazchzbrgr",
        "Elements Value": "308.001",
        "Elements ID": "154"
    },
    {
        "Elements": "Pollycracker",
        "Elements Value": "310",
        "Elements ID": "155"
    },
    {
        "Elements": "Rickobbygogo",
        "Elements Value": "311.978",
        "Elements ID": "156"
    },
    {
        "Elements": "Goodpizzario",
        "Elements Value": "314.002",
        "Elements ID": "157"
    },
    {
        "Elements": "Sogoodababy",
        "Elements Value": "316",
        "Elements ID": "158"
    },
    {
        "Elements": "Contractomalt",
        "Elements Value": "318.04",
        "Elements ID": "159"
    },
    {
        "Elements": "Elguapotiro",
        "Elements Value": "320",
        "Elements ID": "160"
    },
    {
        "Elements": "Helloladieism",
        "Elements Value": "322.002",
        "Elements ID": "161"
    },
    {
        "Elements": "Wayfairerito",
        "Elements Value": "324.001",
        "Elements ID": "162"
    },
    {
        "Elements": "Noairuphere",
        "Elements Value": "326",
        "Elements ID": "163"
    },
    {
        "Elements": "Sheldoranite",
        "Elements Value": "328.03",
        "Elements ID": "164"
    },
    {
        "Elements": "Eggnoguim",
        "Elements Value": "330.002",
        "Elements ID": "165"
    },
    {
        "Elements": "Hornshightomite",
        "Elements Value": "332",
        "Elements ID": "166"
    },
    {
        "Elements": "Bleacharioio",
        "Elements Value": "334.004",
        "Elements ID": "167"
    },
    {
        "Elements": "Fifteenperple",
        "Elements Value": "336.003",
        "Elements ID": "168"
    },
    {
        "Elements": "Heroistica",
        "Elements Value": "338",
        "Elements ID": "169"
    },
    {
        "Elements": "Neversaydie",
        "Elements Value": "340.002",
        "Elements ID": "170"
    },
    {
        "Elements": "Expeterum",
        "Elements Value": "342.36",
        "Elements ID": "171"
    },
    {
        "Elements": "Candilicious",
        "Elements Value": "344.002",
        "Elements ID": "172"
    },
    {
        "Elements": "Diecastium",
        "Elements Value": "346",
        "Elements ID": "173"
    },
    {
        "Elements": "Carpedietium",
        "Elements Value": "348.004",
        "Elements ID": "174"
    },
    {
        "Elements": "Seeheardospeno",
        "Elements Value": "350",
        "Elements ID": "175"
    },
    {
        "Elements": "Randomonium",
        "Elements Value": "352.002",
        "Elements ID": "176"
    },
    {
        "Elements": "Turnrightitum",
        "Elements Value": "354",
        "Elements ID": "177"
    },
    {
        "Elements": "Beckhamarino",
        "Elements Value": "356.001",
        "Elements ID": "178"
    },
    {
        "Elements": "Peacelovehappy",
        "Elements Value": "358.04",
        "Elements ID": "179"
    },
    {
        "Elements": "Badguyium",
        "Elements Value": "360",
        "Elements ID": "180"
    },
    {
        "Elements": "Monkeysteinium",
        "Elements Value": "362.002",
        "Elements ID": "181"
    },
    {
        "Elements": "Endofyeariym",
        "Elements Value": "365",
        "Elements ID": "182"
    },
    {
        "Elements": "Frozentwooh",
        "Elements Value": "366.002",
        "Elements ID": "183"
    },
    {
        "Elements": "Lumergarion",
        "Elements Value": "368",
        "Elements ID": "184"
    },
    {
        "Elements": "Cancwersuxium",
        "Elements Value": "370.003",
        "Elements ID": "185"
    },
    {
        "Elements": "Halfnotixo",
        "Elements Value": "372",
        "Elements ID": "186"
    },
    {
        "Elements": "KaleidoscopicFusion",
        "Elements Value": "406.04",
        "Elements ID": "203"
    },
    {
        "Elements": "Yellowdoggia",
        "Elements Value": "408",
        "Elements ID": "204"
    },
    {
        "Elements": "Tincanmium",
        "Elements Value": "410.0002",
        "Elements ID": "205"
    },
    {
        "Elements": "Skellyjelly",
        "Elements Value": "412",
        "Elements ID": "206"
    },
    {
        "Elements": "Alponium",
        "Elements Value": "414.004",
        "Elements ID": "207"
    },
    {
        "Elements": "Bigemia",
        "Elements Value": "416",
        "Elements ID": "208"
    },
    {
        "Elements": "Chicolattapotta",
        "Elements Value": "418.02",
        "Elements ID": "209"
    }
]
  const NftGallery = ({ onMint }) => {
    const [amounts, setAmounts] = useState({});
    
    const handleMintClick = (nftData) => {
      const itemName = jsonData[nftData]["Elements"];
      
      
  
      onMint(jsonData[nftData],itemName, amounts[nftData] || 1);
      // Reset the amount input after minting
      setAmounts({ ...amounts, [nftData]: 1 });
    };
  
    const handleAmountChange = (e, nftData) => {
      const newAmount = e.target.value;
      setAmounts({ ...amounts, [nftData]: newAmount });
    };
  
    return (
      <div className={styles.container}>
        <ul className={styles.gallery}>
          {Object.keys(jsonData).map((item, index) => (
            <li key={jsonData[item]["Elements"]} className={styles.item}>
              <div className={styles.card}>
                {/* Use the IPFS CID in the src attribute */}
                <img
                  src={`https://wes-boojabaunga.mypinata.cloud/ipfs/QmVbra9GgrHXJrE1hNaJkFFS8R85CJH8TR22BQvnKrys2Q/${jsonData[item]["Elements ID"]}.png`} // Replace with actual image URLs
                  alt={item}
                  className={styles.image}
                />
                <p className={styles.name}>{jsonData[item]["Elements"]}</p>
                <input
                  placeholder='Amount'
                  style={{ maxWidth: "60px" }}
                  value={amounts[item] || 1}
                  onChange={(e) => handleAmountChange(e, item)}
                />
                <button onClick={() => handleMintClick(item)}>
                  Mint
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default NftGallery;