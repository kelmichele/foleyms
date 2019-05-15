import React from "react";
import classes from "./Directory.scss";
import { Helmet } from "react-helmet";
import PageHeader from "../../../components/PageHeader/PageHeader";
import phBG from "../../../assets/images/TEMPgads.jpg";
import Filter from "../../../components/Filter/Filter";


// double check:  
  // let's get grillin, bobby's thrift, Hollis Ole Crush Antique Mall, All About Massage Therapy
  // Christine's alterations, colorz salon, gill's automotive, MANE (main?) attraction salon
  // mort swaim law, path to wellness
  // IF THEY WANT TO MIRROR OPMS, USE DROPLIST 

// const hdLine = (
//   <h1 className={classes.lightHd}>Business Directory</h1>
// );

const directory = () => {
  // const diningList = [
  //   { id: 1, name: "Cooper Kettle Tea Bar", website: "https://www.facebook.com/CopperKettle.TeaBar/"},
  //   { id: 2, name: "Desmond’s Taste of Jamaica", website: "https://www.facebook.com/Desmonds-Taste-of-Jamaica-1897021930577907/"},
  //   { id: 3, name: "Doc Hollidays", website: "www.dochollidaysfoley.com"},
  //   { id: 4, name: "Drowsey Poet @the Foley Station", website: "https://www.facebook.com/drowsypoetfoley/"},
  //   { id: 5, name: "Foley Coffee Shop", website: "https://www.facebook.com/pages/Foley-Coffee-Shop/105556782843760"},
  //   { id: 6, name: "The Gift Horse Restaurant", website: "www.thegifthorserestaurantandantiques.com"},
  //   { id: 7, name: "Gypsy Queen Java", website: "www.gypsyqueenjava.com"},
  //   { id: 8, name: "John’s Gyro & Mediterranean", website: "https://www.facebook.com/JohnsGyro/"},
  //   { id: 9, name: "Kale Yeah Juice Café", website: "www.kaleyeahjuicecafe.org"},
  //   { id: 10, name: "Let’s Get Grillin Specialty Meats", website: "https://www.facebook.com/pages/Lets-Get-Grillin-Meatsforrest-and-Jennys-Yard-Art-Gifts/337114073505474"},
  //   { id: 11, name: "Mamma Mia Pizzeria", website: "https://www.facebook.com/mammamiapizzeriafoley/"},
  //   { id: 12, name: "Portabella’s", website: "www.portabellasrestaurant.com"},
  //   { id: 13, name: "Scuttlebutt Pub", website: "https://www.facebook.com/scuttlebuttpub/"},
  //   { id: 14, name: "Stacey Rexall Drug & Old Tyme Soda Fountain", website: "https://www.facebook.com/Staceys-Rexall-Drugs-165971113414671/"},
  //   { id: 15, name: "The Wacked Out Weiner", website: "www.wackedoutweiner.com"},
  // ];  

  // const retailList= [
  //   { id: 1, name: "ABC Beverages", website: "www.abc.alabama.gov"},
  //   { id: 2, name: "Antiques on Alston Street", website: "www.antiquesonalstonstreet.com"},
  //   { id: 3, name: "Bobby’s Thrift Store", website: "https://www.facebook.com/bobbyrwilson60/"},
  //   { id: 4, name: "Book Exchange of Foley", website: "www.bookexchange.me"},
  //   { id: 5, name: "Bungalows", website: "www.shopbungalows.com"},
  //   { id: 6, name: "Covert Comics", website: "www.foleycomics.com"},
  //   { id: 7, name: "Fish River Furnishings", website: "https://www.facebook.com/FishRiverFurnishings/"},
  //   { id: 8, name: "Foley Art Center", website: "www.foleyartcenter.com"},
  //   { id: 9, name: "Foley Bike Shop", website: "www.thebike-shop.com"},
  //   { id: 10, name: "Forrest & Jenny Yard Art", website: "https://www.facebook.com/ForrestAndJennyYardArt/"},
  //   { id: 11, name: "Gatlin Lumber Company", website: "https://www.facebook.com/Gatlin-Lumber-Company-Inc-161889627166240/?__tn__=%2Cd%2CP-R&eid=ARBGbuXgS97CzEbPO-GRFnVqOr_dryWVzRFbYBdJFGZNpm6D2TPmmLMEEm0i-VgkpKkVRVS6jsfW1QVh"},
  //   { id: 12, name: "Good Morning Mattress", website: "www.goodmorningmattressfoley.com"},
  //   { id: 13, name: "Hollis Ole Crush Antique Mall", website: "https://www.facebook.com/pages/Hollis-Ole-Crush-Antique-Mall/163566373661295"},
  //   { id: 14, name: "Jan’s Art Studio", website: "www.janslocalart.com"},
  //   { id: 15, name: "Kit & Kaboodle Furniture Store", website: "https://www.facebook.com/Kit.and.Kaboodle1/"},
  //   { id: 16, name: "Manning Jewelry", website: "www.manningjewelry.com"},
  //   { id: 17, name: "Morning Glory Creations", website: "www.morningglorycreations.net"},
  //   { id: 18, name: "Napa Auto Parts", website: "www.napaonline.com"},
  //   { id: 19, name: "Parke Place Jewelry", website: "www.parkplacejewelry.com"},
  //   { id: 20, name: "Streets of Orleans Gift Shop & Tanning", website: "www.streetsoforleans.com"},
  //   { id: 21, name: "SummerLife", website: "www.SummerLife-us.myshopify.com"},
  //   { id: 22, name: "Yabba’s Wacky Snack Shack", website: "www.yabbaswackysnackshack.com"},
  // ];

  // const serviceList = [
  //     { id: 1, name: "Ah Chiropractic & Wellness Center", website: "www.ah-chiro.com"},
  //     { id: 2, name: "Alabama Credit Union", website: "www.alabamacu.com"},
  //     { id: 3, name: "Alfa Insurance, Larry Engel", website: "www.alfainsurance.com"},
  //     { id: 4, name: "All About Massage Therapy"},
  //     { id: 5, name: "BB & T Bank", website: "www.bbandt.com"},
  //     { id: 6, name: "Big Wave Dentistry", website: "www.bigwavedentistry.com"},
  //     { id: 7, name: "Christine’s Alterations", website: "https://www.facebook.com/pages/Christines-Alteration-and-Custom-Sewing/162393693784437"},
  //     { id: 8, name: "Citizens Bank", website: "www.citizensbankal.com"},
  //     { id: 9, name: "Coastal Real Estate and Development", website: "www.coastalread.com"},
  //     { id: 10, name: "Colorz Salon", website: "https://www.facebook.com/pages/Colorz-Salon/134802733239282"},
  //     { id: 11, name: "Complete Custom Canvas", website: "https://www.facebook.com/pages/category/Shopping---Retail/Complete-Custom-Canvas-199821563500829/"},
  //     { id: 12, name: "DADS Roofing", website: "www.dads-roofing.com"},
  //     { id: 13, name: "Dayton Hart, DMD Dentistry", website: "www.drdaytonhart.com"},
  //     { id: 14, name: "Ebert Agency", website: "www.ebertagency.com"},
  //     { id: 15, name: "Edward Jones & Company, Lisa Cooper", website: "www.edwardjones.com"},
  //     { id: 16, name: "EJ Builders", website: "www.ejbuilders.com"},
  //     { id: 17, name: "Emerald Coast Mortgage", website: "www.emeraldcoastmortgage.com"},
  //     { id: 18, name: "Fortis College", website: "www.fortis.edu"},
  //     { id: 19, name: "Freeman Collision", website: "www.freemancollision.biz"},
  //     { id: 20, name: "Gill’s Automotive", website: "https://www.facebook.com/pages/Gills-Automotive/136025133113655"},
  //     { id: 21, name: "Goodyear Auto Service", website: "www.goodyearautoservice.com"},
  //     { id: 22, name: "Home Boss Inspection", website: "www.homebossinspection.com"},
  //     { id: 23, name: "J.Russell Pigott Attorney", website: "www.southbaldwinlawyer.com"},
  //     { id: 24, name: "Mane Attraction Hair Salon", website: "https://www.facebook.com/pages/Mane-Attraction/105904769476919"},
  //     { id: 25, name: "McKenzie Florist", website: "www.mckenziestreetfloraldesign.com"},
  //     { id: 26, name: "Mike McConnell Homes", website: "https://www.facebook.com/mikemcconnellhomes/"},
  //     { id: 27, name: "Mort Swaim PC Law"},
  //     { id: 28, name: "Murchison & Newcomb, LLC", website: "www.murchisonandnewcomb.com"},
  //     { id: 29, name: "Noel B.Leonard Attorney", website: "www.attorney-leonard.com"},
  //     { id: 30, name: "North American Title Loans", website: "www.northamericantitleloans.net"},
  //     { id: 31, name: "Orange Blossom Salon", website: "https://www.facebook.com/Orange-Blossom-Salon-111949798817572/"},
  //     { id: 32, name: "Path to Wellness Health & Nutrition Consultants", website: "https://www.facebook.com/pages/Path-to-Wellness/143137465721128"},
  //     { id: 33, name: "Pinks Ink Tattoo Parlor", website: "https://www.facebook.com/PinksInkTattoos/"},
  //     { id: 34, name: "Rat Pack Barber Shop", website: "www.ratpackbarbershop.com"},
  //     { id: 35, name: "Realty Advocates, LLC", website: "www.realtyadvocatesal.com"},
  //     { id: 36, name: "Roots to Wellness Yoga Studio", website: "www.rootstowellnessinc.com"},
  //     { id: 37, name: "South Baldwin Children’s Center", website: "www.southbaldwinrmc.com"},
  //     { id: 38, name: "South Baldwin Chamber of Commerce", website: "www.mylocalchamber.net"},
  //     { id: 39, name: "Stacey Rexall Drug & Old Tyme Soda Fountain", website: "https://www.facebook.com/Staceys-Rexall-Drugs-165971113414671/"},
  //     { id: 40, name: "Stemz Florist", website: "www.stemzflowers.com"},
  //     { id: 41, name: "Steve’s Tech Senter" , website: "https://www.facebook.com/Steves-Tech-Senter-1621029061464823/"},
  //     { id: 42, name: "Tangled Up Salon", website: "https://www.facebook.com/Tangled-Up-Salon-624963564344823/"},
  //     { id: 43, name: "Terrezza Optical", website: "www.terrezzaoptical.com"},
  //     { id: 44, name: "The Stepping Stone Academy Day Care", website: "https://www.facebook.com/TheSteppingStoneAcademy/"},
  //     { id: 45, name: "Vibrations Yoga & Pole", website: "www.vibrationsyoga.com"},
  //     { id: 46, name: "WAS Design", website: "www.was-design.com"},
  //     { id: 47, name: "Wilson Automotive Tire", website: "www.wilson-auto.com"},
  // ];

  // const miscList = [
  //   {id: 1, name: "Action Games & Movies", website: "www.actiongameandmovies.com"},
  //   {id: 2, name: "Gamers Domain", website: "www.gamers-domain.myshopify.com"},
  //   {id: 3, name: "Foley Depot Museum", website: "www.visitfoley.com"},
  //   {id: 4, name: "Foley Fish Company", website: "www.foleyfishcompany.com"},
  //   {id: 5, name: "Holmes Medical Museum", website: "www.visitfoley.com"},
  //   {id: 6, name: "The Hotel Magnolia", website: "www.thehotelmagnolia.com"},
  // ];

  const allList = [
    { id: 16, name: "ABC Beverages", website: "www.abc.alabama.gov", tags: "shopping" },
    { id: 85, name: "Action Games & Movies", website: "www.actiongameandmovies.com", tags: "misc" },
    { id: 38, name: "Ah Chiropractic & Wellness Center", website: "www.ah-chiro.com", tags: "services" },
    { id: 39, name: "Alabama Credit Union", website: "www.alabamacu.com", tags: "services" },
    { id: 40, name: "Alfa Insurance, Larry Engel", website: "www.alfainsurance.com", tags: "services" },
    { id: 41, name: "All About Massage Therapy", tags: "services" },
    { id: 17, name: "Antiques on Alston Street", website: "http://www.shopfoleyfirst.com/antiquesonalstonstreet?fbclid=IwAR3dfu-CKoYbXCUIOXvl9nsx4HEhwix-UIJKWntxzYE0KTUymj5Igg1AqPE", tags: "shopping" },
    { id: 42, name: "BB & T Bank", website: "www.bbandt.com", tags: "services" },
    { id: 43, name: "Big Wave Dentistry", website: "www.bigwavedentistry.com", tags: "services" },
    { id: 18, name: "Bobby’s Thrift Store", website: "https://www.facebook.com/bobbyrwilson60/", tags: "shopping" },
    { id: 19, name: "Book Exchange of Foley", website: "www.bookexchange.me", tags: "shopping" },
    { id: 20, name: "Bungalows", website: "www.shopbungalows.com", tags: "shopping" },
    { id: 44, name: "Christine’s Alterations", website: "https://www.facebook.com/pages/Christines-Alteration-and-Custom-Sewing/162393693784437", tags: "services" },
    { id: 45, name: "Citizens Bank", website: "www.citizensbankal.com", tags: "services" },
    { id: 46, name: "Coastal Real Estate and Development", website: "www.coastalread.com", tags: "services" },
    { id: 47, name: "Colorz Salon", website: "https://www.facebook.com/pages/Colorz-Salon/134802733239282", tags: "services" },
    { id: 48, name: "Complete Custom Canvas", website: "https://www.facebook.com/pages/category/Shopping---Retail/Complete-Custom-Canvas-199821563500829/", tags: "services" },
    { id: 1, name: "Cooper Kettle Tea Bar", website: "https://www.facebook.com/CopperKettle.TeaBar/", tags: "dining" },
    { id: 21, name: "Covert Comics", website: "www.foleycomics.com", tags: "shopping" },
    { id: 49, name: "DADS Roofing", website: "www.dads-roofing.com", tags: "services" },
    { id: 50, name: "Dayton Hart, DMD Dentistry", website: "www.drdaytonhart.com", tags: "services" },
    { id: 2, name: "Desmond’s Taste of Jamaica", website: "https://www.facebook.com/Desmonds-Taste-of-Jamaica-1897021930577907/", tags: "dining" },
    { id: 3, name: "Doc Hollidays", website: "www.dochollidaysfoley.com", tags: "dining" },
    { id: 4, name: "Drowsey Poet @the Foley Station", website: "https://www.facebook.com/drowsypoetfoley/", tags: "dining" },
    { id: 51, name: "Ebert Agency", website: "www.ebertagency.com", tags: "services" },
    { id: 52, name: "Edward Jones & Company, Lisa Cooper", website: "www.edwardjones.com", tags: "services" },
    { id: 53, name: "EJ Builders", website: "www.ejbuilders.com", tags: "services" },
    { id: 54, name: "Emerald Coast Mortgage", website: "www.emeraldcoastmortgage.com", tags: "services" },
    { id: 22, name: "Fish River Furnishings", website: "https://www.facebook.com/FishRiverFurnishings/", tags: "shopping" },
    { id: 23, name: "Foley Art Center", website: "www.foleyartcenter.com", tags: "shopping" },
    { id: 24, name: "Foley Bike Shop", website: "www.thebike-shop.com", tags: "shopping" },
    { id: 5, name: "Foley Coffee Shop", website: "https://www.facebook.com/pages/Foley-Coffee-Shop/105556782843760", tags: "dining" },
    { id: 87, name: "Foley Depot Museum", website: "www.visitfoley.com", tags: "misc" },
    { id: 88, name: "Foley Fish Company", website: "www.foleyfishcompany.com", tags: "misc" },
    { id: 25, name: "Forrest & Jenny Yard Art", website: "https://www.facebook.com/ForrestAndJennyYardArt/", tags: "shopping" },
    { id: 55, name: "Fortis College", website: "www.fortis.edu", tags: "services" },
    { id: 56, name: "Freeman Collision", website: "www.freemancollision.biz", tags: "services" },
    { id: 86, name: "Gamers Domain", website: "www.gamers-domain.myshopify.com", tags: "misc" },
    { id: 26, name: "Gatlin Lumber Company", website: "https://www.facebook.com/Gatlin-Lumber-Company-Inc-161889627166240/?__tn__=%2Cd%2CP-R&eid=ARBGbuXgS97CzEbPO-GRFnVqOr_dryWVzRFbYBdJFGZNpm6D2TPmmLMEEm0i-VgkpKkVRVS6jsfW1QVh", tags: "shopping" },
    { id: 57, name: "Gill’s Automotive", website: "https://www.facebook.com/pages/Gills-Automotive/136025133113655", tags: "services" },
    { id: 27, name: "Good Morning Mattress", website: "www.goodmorningmattressfoley.com", tags: "shopping" },
    { id: 58, name: "Goodyear Auto Service", website: "www.goodyearautoservice.com", tags: "services" },
    { id: 7, name: "Gypsy Queen Java", website: "www.gypsyqueenjava.com", tags: "dining" },
    { id: 28, name: "Hollis Ole Crush Antique Mall", website: "https://www.facebook.com/pages/Hollis-Ole-Crush-Antique-Mall/163566373661295", tags: "shopping" },
    { id: 89, name: "Holmes Medical Museum", website: "www.visitfoley.com", tags: "misc" },
    { id: 59, name: "Home Boss Inspection", website: "www.homebossinspection.com", tags: "services" },
    { id: 60, name: "J.Russell Pigott Attorney", website: "www.southbaldwinlawyer.com", tags: "services" },
    { id: 29, name: "Jan’s Art Studio", website: "www.janslocalart.com", tags: "shopping" },
    { id: 8, name: "John’s Gyro & Mediterranean", website: "https://www.facebook.com/JohnsGyro/", tags: "dining" },
    { id: 9, name: "Kale Yeah Juice Café", website: "www.kaleyeahjuicecafe.org", tags: "dining" },
    { id: 30, name: "Kit & Kaboodle Furniture Store", website: "https://www.facebook.com/Kit.and.Kaboodle1/", tags: "shopping" },
    { id: 10, name: "Let’s Get Grillin Specialty Meats", website: "https://www.facebook.com/pages/Lets-Get-Grillin-Meatsforrest-and-Jennys-Yard-Art-Gifts/337114073505474", tags: "dining" },
    { id: 11, name: "Mamma Mia Pizzeria", website: "https://www.facebook.com/mammamiapizzeriafoley/", tags: "dining" },
    { id: 61, name: "Mane Attraction Hair Salon", website: "https://www.facebook.com/pages/Mane-Attraction/105904769476919", tags: "services" },
    { id: 31, name: "Manning Jewelry", website: "www.manningjewelry.com", tags: "shopping" },
    { id: 62, name: "McKenzie Florist", website: "www.mckenziestreetfloraldesign.com", tags: "services" },
    { id: 63, name: "Mike McConnell Homes", website: "https://www.facebook.com/mikemcconnellhomes/", tags: "services" },
    { id: 32, name: "Morning Glory Creations", website: "www.morningglorycreations.net", tags: "shopping" },
    { id: 64, name: "Mort Swaim PC Law", tags: "services" },
    { id: 65, name: "Murchison & Newcomb, LLC", website: "www.murchisonandnewcomb.com", tags: "services" },
    { id: 33, name: "Napa Auto Parts", website: "www.napaonline.com", tags: "shopping" },
    { id: 66, name: "Noel B.Leonard Attorney", website: "www.attorney-leonard.com", tags: "services" },
    { id: 67, name: "North American Title Loans", website: "www.northamericantitleloans.net", tags: "services" },
    { id: 68, name: "Orange Blossom Salon", website: "https://www.facebook.com/Orange-Blossom-Salon-111949798817572/", tags: "services" },
    { id: 34, name: "Parke Place Jewelry", website: "www.parkplacejewelry.com", tags: "shopping" },
    { id: 69, name: "Path to Wellness Health & Nutrition Consultants", website: "https://www.facebook.com/pages/Path-to-Wellness/143137465721128", tags: "services" },
    { id: 70, name: "Pinks Ink Tattoo Parlor", website: "https://www.facebook.com/PinksInkTattoos/", tags: "services" },
    { id: 12, name: "Portabella’s", website: "www.portabellasrestaurant.com", tags: "dining" },
    { id: 71, name: "Rat Pack Barber Shop", website: "www.ratpackbarbershop.com", tags: "services" },
    { id: 72, name: "Realty Advocates, LLC", website: "www.realtyadvocatesal.com", tags: "services" },
    { id: 73, name: "Roots to Wellness Yoga Studio", website: "www.rootstowellnessinc.com", tags: "services" },
    { id: 13, name: "Scuttlebutt Pub", website: "https://www.facebook.com/scuttlebuttpub/", tags: "dining" },
    { id: 75, name: "South Baldwin Chamber of Commerce", website: "www.mylocalchamber.net", tags: "services" },
    { id: 74, name: "South Baldwin Children’s Center", website: "www.southbaldwinrmc.com", tags: "services" },
    { id: 14, name: "Stacey Rexall Drug & Old Tyme Soda Fountain", website: "https://www.facebook.com/Staceys-Rexall-Drugs-165971113414671/", tags: "dining" },
    { id: 76, name: "Stacey Rexall Drug & Old Tyme Soda Fountain", website: "https://www.facebook.com/Staceys-Rexall-Drugs-165971113414671/", tags: "services" },
    { id: 77, name: "Stemz Florist", website: "www.stemzflowers.com", tags: "services" },
    { id: 78, name: "Steve’s Tech Senter", website: "https://www.facebook.com/Steves-Tech-Senter-1621029061464823/", tags: "services" },
    { id: 35, name: "Streets of Orleans Gift Shop & Tanning", website: "www.streetsoforleans.com", tags: "shopping" },
    { id: 36, name: "SummerLife", website: "www.SummerLife-us.myshopify.com", tags: "shopping" },
    { id: 79, name: "Tangled Up Salon", website: "https://www.facebook.com/Tangled-Up-Salon-624963564344823/", tags: "services" },
    { id: 80, name: "Terrezza Optical", website: "www.terrezzaoptical.com", tags: "services" },
    { id: 6, name: "The Gift Horse Restaurant", website: "www.thegifthorserestaurantandantiques.com", tags: "dining" },
    { id: 90, name: "The Hotel Magnolia", website: "www.thehotelmagnolia.com", tags: "misc" },
    { id: 81, name: "The Stepping Stone Academy Day Care", website: "https://www.facebook.com/TheSteppingStoneAcademy/", tags: "services" },
    { id: 15, name: "The Wacked Out Weiner", website: "www.wackedoutweiner.com", tags: "dining" },
    { id: 82, name: "Vibrations Yoga & Pole", website: "www.vibrationsyoga.com", tags: "services" },
    { id: 83, name: "WAS Design", website: "www.was-design.com", tags: "services" },
    { id: 84, name: "Wilson Automotive Tire", website: "www.wilson-auto.com", tags: "services" },
    { id: 37, name: "Yabba’s Wacky Snack Shack", website: "www.yabbaswackysnackshack.com", tags: "shopping" },
  ]

  return (
    <div className={classes.directoryPage}>
      <Helmet>
        <title>Directory of Businesses | Foley Main Street</title>
        <meta name="description" content="" />
      </Helmet>
      {/* <Parallax plaxImage={phImage} plaxStyle="styleHd" plaxHeadline={hdLine} /> */}
      <PageHeader phImage={phBG} ovPacity=".4" hColor="white" pageTitle="Business Directory" Pos="center" />

      <div className={classes.medDef}>
        <Filter FilterItems={allList} />



        {/* <DropList category="Dining" subcat="Get Your Dine On" BgImage={bg1} dropItems={diningList} />
        <DropList category="Shopping" subcat="Get Your Shop On" BgImage={bg2} dropItems={retailList} />
        <DropList category="Services" subcat="Get Your Serve On" BgImage={bg1} dropItems={serviceList} />
        <DropList category="Misc" subcat="Get Your Misc On" BgImage={bg2} dropItems={miscList}  /> */}
      </div>
    </div>
  );
};
export default directory;