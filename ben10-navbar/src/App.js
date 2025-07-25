import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NarutoPage from './NarutoPage';
import "./App.css";
import preloaderGif from "./preloader.gif";
import logoPng from "./logo.png";

// Card data
const cardData = [
  {
    name: "Your Name",
    link: "https://youtu.be/hxtY-Mjmi9g?si=3NWUz49DvUSDmXIU",
    language: "Hindi Dub",
    category: "Anime Hindi",
    type: "video"
  },
  {
    name: "Cowboy Bebop Ep 1",
    link: "https://youtu.be/yz668e5_eX4?si=xDlnji8MI30adD0A",
    language: "Japanese",
    category: "Anime Hindi",
    type: "video"
  },
  {
    name: "Delhi Belly",
    link: "https://youtu.be/g5_W2nz0Xjo?si=wVV1lzLaQp3tKwVO",
    language: "Hindi",
    category: "Bollywood",
    type: "video"
  },
  {
    name: "Berserk Of Gluttony",
    link: "https://youtu.be/Otlu6gpcjKo?si=qd8iuSVzi0h0pLnZ",
    language: "Hindi",
    category: "Anime Hindi",
    type: "video"
  },
  {
    name: "Naruto [Hindi Dub]",
    link: "/naruto",
    language: "Hindi",
    category: "Anime Hindi",
    type: "playlist",
    thumbnail: "https://i.ytimg.com/vi/E-E0Ipj69OE/hqdefault.jpg"
  },
  {
    name: "The Reincarnation Of The Strongest Exorcist In Another World Ep 1",
    link: "https://youtu.be/8YBXlYzCN74?si=IHt9yFvRFRTses5t",
    language: "Hindi",
    category: "Anime Hindi",
    type: "video"
  },
  {
    name: "My One Hit Kill Sister",
    link: "https://www.youtube.com/playlist?list=PLHYxDsPk5zuGkwsOjbVi-N1DM45RTr0L5",
    language: "Hindi",
    category: "Anime Hindi",
    type: "playlist",
    firstVideo: "https://youtu.be/0Qw8rQdQKp8" // Placeholder, will extract dynamically
  },
  {
    name: "The Strongest Tanks Labyrinth Raids",
    link: "https://www.youtube.com/playlist?list=PLlyROb2AKDzwZ54HG-109s4w9pyhxSSYy",
    language: "Hindi",
    category: "Anime Hindi",
    type: "playlist",
    firstVideo: "https://youtu.be/0Qw8rQdQKp8"
  },
  {
    name: "King of the Land",
    link: "https://www.youtube.com/playlist?list=PLpkA9eET-AqrHZmd4dcqhzE2DLPr4H1tH",
    language: "Hindi",
    category: "K Drama",
    type: "playlist",
    firstVideo: "https://youtu.be/0Qw8rQdQKp8"
  },
  {
    name: "Chainsaw Man",
    link: "https://youtu.be/GRxDMWyqMgs?si=W046oUYBQFS8NEdo",
    language: "Hindi",
    category: "Anime Hindi",
    type: "video"
  },
  {
    name: "Spy x Family Season 1",
    link: "https://youtu.be/1AQtGDYVs7k?si=X-VAvCkhxgrTq9xa",
    language: "Hindi",
    category: "Anime Hindi",
    type: "video"
  },
  {
    name: "That Time I Got Reincarnated as a Slime",
    link: "https://youtu.be/_YQF8yiQmtk?si=WCT1tcYkPkV7jV_F",
    language: "Hindi",
    category: "Anime Hindi",
    type: "video"
  },
  {
    name: "An Archdemon's Dilemma: How to Love Your Elf Bride",
    link: "https://youtu.be/GdIDIKHFEFg?si=IMe3gNkt0rn-5rtS",
    language: "Hindi",
    category: "Anime Hindi",
    type: "video"
  },
  {
    name: "YOU ARE MY GLORY",
    link: "https://www.youtube.com/playlist?list=PLPIEgrAXwFPCqmVGj_rGSVSkgNsDKxAk6",
    language: "Hindi",
    category: "K Drama",
    type: "playlist",
    firstVideo: "https://youtu.be/0Qw8rQdQKp8"
  },
  {
    name: "the laws of eternity.",
    link: "https://youtu.be/YWZ4O8wmFPM?si=QyCaW44n6PM5Lupd",
    language: "Hindi",
    category: "Anime Movie",
    type: "video"
  },
  {
    name: "Time to Fall in Love",
    link: "https://www.youtube.com/playlist?list=PL46D2_bufrpVLdwxQcVuQAtNSor1XLkQr",
    language: "Hindi",
    category: "K Drama",
    type: "playlist",
    firstVideo: "https://youtu.be/0Qw8rQdQKp8"
  },
  {
    name: "It's Okay To Not Be Okay",
    link: "https://www.youtube.com/playlist?list=PLqyL7AuxXro6Z-j5Vm2QSRsbgA8kVq7iK",
    language: "Hindi",
    category: "K Drama",
    type: "playlist",
    firstVideo: "https://youtu.be/0Qw8rQdQKp8"
  },
  {
    name: "Warm Meet You",
    link: "https://www.youtube.com/playlist?list=PLC3UsMUqZS0rXTeaS3nrN03awib9kDXGJ",
    language: "Hindi",
    category: "K Drama",
    type: "playlist",
    firstVideo: "https://youtu.be/0Qw8rQdQKp8"
  },
  {
    name: "Destined with you",
    link: "https://www.youtube.com/playlist?list=PLjm2JK5EExq9BfbpFe5EVOZD8FQHQGmIj",
    language: "Hindi",
    category: "K Drama",
    type: "playlist",
    firstVideo: "https://youtu.be/0Qw8rQdQKp8"
  },
  {
    name: "MEETING YOU",
    link: "https://www.youtube.com/playlist?list=PLydV1a2XgnJShmCv84yB0HjMHR29X-7Wk",
    language: "Hindi",
    category: "K Drama",
    type: "playlist",
    firstVideo: "https://youtu.be/0Qw8rQdQKp8"
  },
  {
    name: "My Love from the Star",
    link: "https://www.youtube.com/playlist?list=PLrTx7wGPPoFGIeIMmOxeADMBgUGd11KHf",
    language: "Hindi",
    category: "K Drama",
    type: "playlist",
    firstVideo: "https://youtu.be/0Qw8rQdQKp8"
  },
  {
    name: "Black Fox",
    link: "https://youtu.be/x_NAu8lXWCk?si=zAP-jHtbzUBtZN-p",
    language: "Hindi",
    category: "Anime Movie",
    type: "video"
  },
  {
    name: "The Accidental Husband",
    link: "https://youtu.be/xsyvPHGB4ws?si=ze1nsyFZXq-VYZLI",
    language: "Hindi",
    category: "Chinese Movie",
    type: "video"
  },
  {
    name: "you are beyond(over the sky)",
    link: "https://youtu.be/20WZxTadNDE?si=CrJA7ESwhSlMCeBt",
    language: "Hindi",
    category: "Anime Movie",
    type: "video"
  },
  {
    name: "ReLife",
    link: "https://youtu.be/vGkTPIJbAbo?si=VZeyPWK8bGmdqcnY",
    language: "English",
    category: "Anime Hindi",
    type: "video"
  },
  {
    name: "JoJo's Bizzare adventure S1",
    link: "https://youtu.be/2r2Xg38F1W8?si=gsVgRunPiQ9RFgKZ",
    language: "Hindi",
    category: "Anime Hindi",
    type: "video"
  },
  {
    name: "Fairy Tail [Hindi Dub]",
    link: "https://www.youtube.com/playlist?list=PLpm1VVK4UL1527GtQ-Un5MCIQ7HX8DhoH",
    language: "HindiAnime",
    category: "Anime Hindi",
    type: "playlist"
  },
  {
    name: "DAN DA DAN [Hindi Dub]",
    link: "https://www.youtube.com/playlist?list=PLpm1VVK4UL15vn9lYeQzIKfx08vAzF6KY",
    language: "HindiAnime",
    category: "Anime Hindi",
    type: "playlist"
  },
  {
    name: "Tokyo Revengers [Hindi Dub]",
    link: "https://www.youtube.com/playlist?list=PLpm1VVK4UL16O9kFPHnb5CLsN2YEpVfRE",
    language: "HindiAnime",
    category: "Anime Hindi",
    type: "playlist"
  },
  {
    name: "I PARRY EVERYTHING [Hindi Dub]",
    link: "https://www.youtube.com/playlist?list=PLpm1VVK4UL16-iDOlu33co3uSs1DyMNLH",
    language: "HindiAnime",
    category: "Anime Hindi",
    type: "playlist"
  },
  {
    name: "Mushoku Tensei: Jobless Reincarnation [Hindi Dub]",
    link: "https://www.youtube.com/playlist?list=PLpm1VVK4UL17_GoSaunqB9MFvvES607w7",
    language: "HindiAnime",
    category: "Anime Hindi",
    type: "playlist"
  },
  // Bollywood additions:
  { name: "Taxi No. 9211", link: "https://youtu.be/vgLBZ-AkLiw?si=NXs2ekRQ5VPIOSUI", language: "Hindi", category: "Bollywood", type: "video" },
  { name: "Dil Toh Bachcha Hai Ji", link: "https://youtu.be/4JtA4oVSfUA?si=XeBEW6zBdk__iSAQ", language: "Hindi", category: "Bollywood", type: "video" },
  { name: "CHALO DILLI", link: "https://youtu.be/B7GVLKi60wQ?si=y3j-et5fN1WhdzSC", language: "Hindi", category: "Bollywood", type: "video" },
  { name: "Mere Baap Pehle Aap", link: "https://youtu.be/uKXE2WKk0DI?si=LqkWNKwtqvQqcmj_", language: "Hindi", category: "Bollywood", type: "video" },
  { name: "Hungama", link: "https://youtu.be/55sUfITkuVY?si=mCh5P4keA0cU1XKK", language: "Hindi", category: "Bollywood", type: "video" },
  { name: "Romeo S3", link: "https://youtu.be/tQtJzzCOiys?si=Sp6RKILoTRsm74rY", language: "Hindi", category: "Bollywood", type: "video" },
  { name: "The Rajasaab", link: "https://youtu.be/pxAU5Oro38g?si=KW1PZZy4pFDrJofe", language: "Hindi", category: "Bollywood", type: "video" },
  { name: "Chhalava (2025)", link: "https://youtu.be/XVy6t5wf3bg?feature=shared", language: "Hindi", category: "Bollywood", type: "video" },
  { name: "Dacklati", link: "https://youtu.be/Y-MMGe3wRhE?feature=shared", language: "Hindi", category: "Bollywood", type: "video" },
  { name: "BABY", link: "https://youtu.be/ZrkcXuVlf4U?feature=shared", language: "Hindi", category: "Bollywood", type: "video" },
  { name: "URI: The Surgical Strike", link: "https://youtu.be/MT0hGJL6m7k?feature=shared", language: "Hindi", category: "Bollywood", type: "video" },
  { name: "The Legend Of Bhagat Singh", link: "https://youtu.be/CbqzZz1DQSs?feature=shared", language: "Hindi", category: "Bollywood", type: "video" },
  { name: "बॉर्डर: Border (1997)", link: "https://youtu.be/nGNmyt9Ywqc?feature=shared", language: "Hindi", category: "Bollywood", type: "video" },
  { name: "The Diplomat", link: "https://youtu.be/sR_YNLJGKg0?feature=shared", language: "Hindi", category: "Bollywood", type: "video" },
  { name: "Parmanu : The Story of Pokhran", link: "https://youtu.be/fxbxhXfxOF4?feature=shared", language: "Hindi", category: "Bollywood", type: "video" },
  { name: "Commando 2", link: "https://youtu.be/kOjGmadqalA?feature=shared", language: "Hindi", category: "Bollywood", type: "video" },
  { name: "Commando - A One Man Army", link: "https://youtu.be/z4xO-uQKL4g?feature=shared", language: "Hindi", category: "Bollywood", type: "video" },
  { name: "R.. Rajkumar", link: "https://youtu.be/MN8KZr8iDyY?feature=shared", language: "Hindi", category: "Bollywood", type: "video" },
  { name: "Singh Is Kinng", link: "https://youtu.be/5O7awO4zJmo?feature=shared", language: "Hindi", category: "Bollywood", type: "video" },
  { name: "Golmaal - Fun Unlimited (2006)", link: "https://youtu.be/SodVhwB6Sz8?feature=shared", language: "Hindi", category: "Bollywood", type: "video" },
  { name: "Golmaal Again (2017)", link: "https://youtu.be/J7vzDh2A9nk?feature=shared", language: "Hindi", category: "Bollywood", type: "video" },
  { name: "Welcome", link: "https://youtu.be/vtq3j2wCndo?feature=shared", language: "Hindi", category: "Bollywood", type: "video" },
  { name: "Ready", link: "https://youtu.be/tPXYWRGNl7s?feature=shared", language: "Hindi", category: "Bollywood", type: "video" },
  { name: "NO ENTRY (2005)", link: "https://youtu.be/WWo__ZQxmMk?feature=shared", language: "Hindi", category: "Bollywood", type: "video" },
  { name: "NO PROBLEM", link: "https://youtu.be/llHyV6obo74?feature=shared", language: "Hindi", category: "Bollywood", type: "video" },
  { name: "ROBOT 2.0", link: "https://youtu.be/S2enUCjDlpc?feature=shared", language: "Hindi", category: "Bollywood", type: "video" },
  { name: "Sivaji The Boss (Sivaji)", link: "https://youtu.be/NenlQz-FkLY?feature=shared", language: "Hindi", category: "Bollywood", type: "video" },
  { name: "Nayak", link: "https://youtu.be/wb0xa9jbIRw?feature=shared", language: "Hindi", category: "Bollywood", type: "video" },
  { name: "Hindi Medium", link: "https://youtu.be/6M191qGTZA4?feature=shared", language: "Hindi", category: "Bollywood", type: "video" },
  { name: "Patiala House", link: "https://youtu.be/HMh8edSR-Qg?feature=shared", language: "Hindi", category: "Bollywood", type: "video" },
  { name: "Bhool Bholaiyaa", link: "https://youtu.be/jzYxbnHHhY4?feature=shared", language: "Hindi", category: "Bollywood", type: "video" },
  { name: "Raabta", link: "https://youtu.be/Iy-6jmQCcrI?feature=shared", language: "Hindi", category: "Bollywood", type: "video" },
  { name: "Behen Hogi Teri", link: "https://youtu.be/JFPUcHFWiEg?feature=shared", language: "Hindi", category: "Bollywood", type: "video" },
];

const animeSubbed = [
    { name: "Shangri-La Frontier S1", link: "https://www.youtube.com/watch?v=Br00FimjS6c", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Failure Frame", link: "https://www.youtube.com/watch?v=2yYyOnugFLc", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "That Time I Got Reincarnated as a Slime - Episode 01～12", link: "https://www.youtube.com/watch?v=RfFqXoZuio4", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Zom 100: Bucket List of the Dead", link: "https://www.youtube.com/watch?v=8oe0nprZAxA", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Re:ZERO -Starting Life in Another World- Director's Cut", link: "https://www.youtube.com/watch?v=plihjlXn3eU", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Let This Grieving Soul Retire", link: "https://www.youtube.com/watch?v=FX-EK2p5YUg", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "My Instant Death Ability is Overpowered", link: "https://www.youtube.com/watch?v=EvkeJIWvyBc", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "A Playthrough of a Certain Dude's VRMMO Life", link: "https://www.youtube.com/watch?v=XY055cO6KxY", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Mieruko-Chan", link: "https://www.youtube.com/watch?v=WLcSxxV3uug", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Mushoku Tensei: Jobless Reincarnation", link: "https://www.youtube.com/watch?v=La4AoJEqVg0", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Mushoku Tensei: Jobless Reincarnation Season 2", link: "https://www.youtube.com/watch?v=H_NR2pDijbg", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Goblin Slayer II", link: "https://www.youtube.com/watch?v=tuuymyyE2yo", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Goblin Slayer", link: "https://www.youtube.com/watch?v=CaX_umWtMlU", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "The Saintʼs Magic Power is Omnipotent", link: "https://www.youtube.com/watch?v=SSAYzgAS6a4", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "The Saintʼs Magic Power is Omnipotent Season2", link: "https://www.youtube.com/watch?v=Ok3LkltBPuI", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Mob Psycho 100 (S1)", link: "https://www.youtube.com/watch?v=ydOExCqkSlM", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Mob Psycho 100 II (S2)", link: "https://www.youtube.com/watch?v=AxxqizQ_w78", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "ASSASSINATION CLASSROOM", link: "https://www.youtube.com/watch?v=daxJycBvuKI", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "ASSASSINATION CLASSROOM 2", link: "https://www.youtube.com/watch?v=OirvSAgccJE", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "BOFURI: I Don't Want to Get Hurt, so I'll Max Out My Defens", link: "https://www.youtube.com/watch?v=-r8UmPMWOQM", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "BOFURI: I Don’t Want to Get Hurt, so I’ll Max Out My Defense. Season 2", link: "https://www.youtube.com/watch?v=dMXHKduCAEY", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Classroom of the Elite", link: "https://www.youtube.com/watch?v=wwr7XZu98Is", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Classroom of the Elite Season 2", link: "https://www.youtube.com/watch?v=0nf80aIHFbk", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "SPY×FAMILY Part 1", link: "https://www.youtube.com/watch?v=boEwPxt39vE", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "MORIARTY THE PATRIOT - Part 1", link: "https://www.youtube.com/watch?v=BvnvbZvVlEs", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "MORIARTY THE PATRIOT - Part 2", link: "https://www.youtube.com/watch?v=Bu773D03Pik", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "One Punch Man (Season 1)", link: "https://www.youtube.com/watch?v=uUAz7rC4-SA", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "One Punch Man (Season 2)", link: "https://www.youtube.com/watch?v=ug4SRz5bWro", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Welcome To Demon School! Iruma-kun Season 1", link: "https://www.youtube.com/watch?v=YucHedBB22Q", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Welcome To Demon School! Iruma-kun Season 2", link: "https://www.youtube.com/watch?v=T4XJZDdoD3M", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Welcome To Demon School! Iruma-kun Season 3", link: "https://www.youtube.com/watch?v=7ww03O6qNjU", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Tokyo Revengers - Season 1", link: "https://www.youtube.com/watch?v=kYq01TK7fzQ", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "The Devil Is A Part-Timer! (Season 1)", link: "https://www.youtube.com/watch?v=MJ9rjybBjEI", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "SEVEN KNIGHTS REVOLUTION -Hero Successor-", link: "https://www.youtube.com/watch?v=kyqYmwXHChk", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "If It's for My Daughter, I'd Even Defeat a Demon Lord", link: "https://www.youtube.com/watch?v=3NfKXBRDTuk", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Asobi Asobase - Workshop of Fun", link: "https://www.youtube.com/watch?v=fBV2CyOfbQM", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Ippon again!", link: "https://www.youtube.com/watch?v=LulXlv93FQU", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "THE GOD OF HIGH SCHOOL", link: "https://www.youtube.com/watch?v=F6P0v0rm7LA", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Suppose a Kid from the Last Dungeon Boonies Moved to a Starter Town?", link: "https://www.youtube.com/watch?v=rUXyu1tlt4E", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Cautious Hero: The Hero Is Overpowered but Overly Cautious", link: "https://www.youtube.com/watch?v=XRBQS_x_1n0", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "The World's Finest Assassin Gets Reincarnated in Another World as an Aristocrat", link: "https://www.youtube.com/watch?v=R5yc36m0sKk", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Kemono Jihen", link: "https://www.youtube.com/watch?v=JtMUkaQETvI", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Parallel World Pharmacy", link: "https://www.youtube.com/watch?v=3I4WniXydag", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "The Greatest Demon Lord Is Reborn as a Typical Nobody", link: "https://www.youtube.com/watch?v=YY73GAWULdU", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Higehiro: After Being Rejected, I Shaved and Took in a High School Runaway", link: "https://www.youtube.com/watch?v=ZkQfco3tX0w", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "High School Prodigies Have It Easy Even in Another World!", link: "https://www.youtube.com/watch?v=IwchJkyOA-4", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "I've Been Killing Slimes for 300 Years and Maxed Out My Level", link: "https://www.youtube.com/watch?v=vislEK2-SFY", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Skeleton Knight in Another World", link: "https://www.youtube.com/watch?v=NBWIRNQH4qA", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Beast Tamer", link: "https://www.youtube.com/watch?v=dV6IfQldb0Y", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "[Private video]", link: "https://www.youtube.com/watch?v=wLtF50Welyk", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "The genius prince's guide to raising a nation out of debt", link: "https://www.youtube.com/watch?v=HZnEvoQPcm4", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Magical Warfare", link: "https://www.youtube.com/watch?v=MLDTzoQKmdM", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Shikimori's Not Just a Cutie", link: "https://www.youtube.com/watch?v=mmTxyf3RRcU", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "She professed herself pupil of the wise man", link: "https://www.youtube.com/watch?v=cVmteNmnGws", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "My Next Life as a VILLAINESS: ALL ROUTES LEAD TO DOOM!", link: "https://www.youtube.com/watch?v=u86konG-EHM", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "TALENTLESS NANA", link: "https://www.youtube.com/watch?v=LgxRNzJ-sHc", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "The Magical Revolution of the Reincarnated Princess and the Genius Young Lady", link: "https://www.youtube.com/watch?v=LCg8T0OJ8rg", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Campfire Cooking in Another World with My Absurd Skill", link: "https://www.youtube.com/watch?v=Y2kGBN52p58", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Reborn to Master the Blade: From Hero-King to Extraordinary Squire ♀", link: "https://www.youtube.com/watch?v=A0G_VKH-q58", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Ningen Fushin: Adventurers Who Don't Believe in Humanity Will Save the World", link: "https://www.youtube.com/watch?v=rpoHhxO4eHU", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "The Ones Within", link: "https://www.youtube.com/watch?v=IeanYZS8pv4", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "ZOMBIE LAND SAGA REVENGE", link: "https://www.youtube.com/watch?v=zAtMVeKCWcw", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Wandering Witch: The Journey of Elaina", link: "https://www.youtube.com/watch?v=DTxdGVI-hH4", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "The Legendary Hero is Dead!", link: "https://www.youtube.com/watch?v=tEZSjKhAjHw", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "I Got a CHEAT SKILL in ANOTHER WORLD and Became UNRIVALED in the REAL WORLD, Too", link: "https://www.youtube.com/watch?v=bzfrykgqkpE", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "My Next Life as a VILLAINESS: ALL ROUTES LEAD TO DOOM! X", link: "https://www.youtube.com/watch?v=Qu4nhC9UW9A", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "My Unique Skill Makes Me OP even at Level 1", link: "https://www.youtube.com/watch?v=fL6I-4EH5AQ", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "The Dawn of the Witch", link: "https://www.youtube.com/watch?v=rDUbcAkbRWg", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "The Unwanted Undead Adventurer", link: "https://www.youtube.com/watch?v=f41F40vl_DU", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "The Most Heretical Last Boss Queen: From Villainess to Savior", link: "https://www.youtube.com/watch?v=WP17Lcz3xtk", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "I Was Reincarnated as the 7th Prince", link: "https://www.youtube.com/watch?v=0pTqr2M1z0E", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "The Wrong Way to Use Healing Magic", link: "https://www.youtube.com/watch?v=QSe2sKEyDUA", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Berserk of Gluttony", link: "https://www.youtube.com/watch?v=Otlu6gpcjKo", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Re:Monster", link: "https://www.youtube.com/watch?v=CSmhZM9dmH4", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "THE NEW GATE", link: "https://www.youtube.com/watch?v=2Tcea-7jXgQ", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "ARTE", link: "https://www.youtube.com/watch?v=A_kG7PgT6-A", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "【Name this anime?】She is just too cute and handsome at the same time!", link: "https://www.youtube.com/watch?v=lRfT00_bWAo", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "I PARRY EVERYTHING", link: "https://www.youtube.com/watch?v=GNxAHXevZtE", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Frieren: Beyond Journey's End", link: "https://www.youtube.com/watch?v=kMq4ZGY02QY", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "7th Time Loop", link: "https://www.youtube.com/watch?v=3tL1QR2J0nM", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "7th Time Loop: The Villainess Enjoys a Carefree Life Married to Her Worst Enemy!", link: "https://www.youtube.com/watch?v=ss7mJgai-Yo", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "【Name this anime?】Making the most out of leftovers to become the ultimate hero. Pretty cool, right?", link: "https://www.youtube.com/watch?v=-mEa0u6SLS0", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "The Devil Is a Part-Timer!", link: "https://www.youtube.com/watch?v=VkGeoflXkmU", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "The Familiar of Zero Season 1", link: "https://www.youtube.com/watch?v=ECa4KLbCFqE", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "【Name this anime】I Wanna Just Chill with My OP Powers!", link: "https://www.youtube.com/watch?v=NtUuDTKY3bY", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "I Was Reincarnated as the 7th Prince", link: "https://www.youtube.com/watch?v=Z12nJFGsM0I", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Loner Life in Another World", link: "https://www.youtube.com/watch?v=BFOy7P7dK3I", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "A Journey Through Another World", link: "https://www.youtube.com/watch?v=hSnhNMZ3Xss", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Combatants Will Be Dispatched!", link: "https://www.youtube.com/watch?v=-ufkBI9MHFI", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "A Nobody's Way Up to an Exploration Hero", link: "https://www.youtube.com/watch?v=1I1Cx6QPiAQ", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "The Ossan Newbie Adventurer", link: "https://www.youtube.com/watch?v=Rc_FTBw_OBY", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Tearmoon Empire", link: "https://www.youtube.com/watch?v=ALW7SC0axdU", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "The Unwanted Undead Adventurer", link: "https://www.youtube.com/watch?v=KACVLHiHznA", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Sabikui Bisco", link: "https://www.youtube.com/watch?v=kxYrTQhvwiY", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Chain Chronicle: The Light of Haecceitas", link: "https://www.youtube.com/watch?v=W4Luh8oHtd0", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "The Most Notorious “Talker” Runs the World’s Greatest Clan", link: "https://www.youtube.com/watch?v=cvlA5E5kcIc", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Accel World", link: "https://www.youtube.com/watch?v=kU1kyfkVDw8", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Grimoire of Zero", link: "https://www.youtube.com/watch?v=2isRQBxMrtU", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "The Detective is Already Dead", link: "https://www.youtube.com/watch?v=ZbFsItfjO2E", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "School Babysitters", link: "https://www.youtube.com/watch?v=qxSlgYAec2E", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "My Senpai is Annoying", link: "https://www.youtube.com/watch?v=iSYow3wNPJU", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Shironeko Project ZERO CHRONICLE", link: "https://www.youtube.com/watch?v=jDaGyNcBm5A", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Asteroid in Love", link: "https://www.youtube.com/watch?v=nWj7eGY1A70", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "BLACK BULLET", link: "https://www.youtube.com/watch?v=y-fJ-fjIiCs", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "HUNTER×HUNTER: The Last Mission [English Sub]", link: "https://www.youtube.com/watch?v=zxNt3-b6D9A", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "SELECTION PROJECT", link: "https://www.youtube.com/watch?v=4khmmPle3Uw", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Kuma Kuma Kuma Bear - Punch!", link: "https://www.youtube.com/watch?v=hLK106l74sY", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Sugar Apple Fairy Tale (Part 1)", link: "https://www.youtube.com/watch?v=wqeGh_2S18M", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Sugar Apple Fairy Tale (Part 2)", link: "https://www.youtube.com/watch?v=aqBHWxZa6WE", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Rent-a-Girlfriend 2nd Season", link: "https://www.youtube.com/watch?v=O98E5MN3KFs", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "RUMBLE GARANNDOLL", link: "https://www.youtube.com/watch?v=VPlA5wcN8N4", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "The Helpful Fox Senko-san", link: "https://www.youtube.com/watch?v=4fsxrsF2-LM", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Servamp", link: "https://www.youtube.com/watch?v=JV6lT7r50h0", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "That Time I Got Reincarnated as a Slime Season 3", link: "https://www.youtube.com/watch?v=ZIo-N3JX6go", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "That Time I Got Reincarnated as a Slime Season 2", link: "https://www.youtube.com/watch?v=xeMMe5yd9Rw", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "That Time I Got Reincarnated as a Slime - Episode 13～24.5", link: "https://www.youtube.com/watch?v=4lyoTo0-gWs", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Beheneko: The Elf-Girl's Cat is Secretly an S-Ranked Monster!", link: "https://www.youtube.com/watch?v=luy_qkKGdS4", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Wistoria: Wand and Sword (Season 1)", link: "https://www.youtube.com/watch?v=GuVZX-wMSq8", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Sometimes you feel the need to shove an entire cucumber inside of you ‍♂️", link: "https://www.youtube.com/watch?v=hSBZM2Cq7vs", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Battle Game in 5 Seconds", link: "https://www.youtube.com/watch?v=w0HAwgub4Yw", language: "Subbed", category: "Anime Subbed", type: "video" },
    { name: "Death March to The Parallel World Rhapsody || ENGLISH SUBTITLES", link: "https://www.youtube.com/watch?v=PzgImzt2c_w", language: "Subbed", category: "Anime Subbed", type: "video" },
];

// Add Chinese Movie cards:
const chineseMovies = [
  { name: "Sword Warrior", link: "https://www.youtube.com/watch?v=oSRo83e8Qls" },
  { name: "Tai Chi Hero", link: "https://www.youtube.com/watch?v=vFoK3CL2b4Y" },
  { name: "Adventure of Princess", link: "https://www.youtube.com/watch?v=HfFHYZ4vCoU" },
  { name: "Shaolin Hustle", link: "https://www.youtube.com/watch?v=O0r-5HLZxLo" },
  { name: "Dragon Slayer", link: "https://www.youtube.com/watch?v=IiHV8Tzsmas" },
  { name: "Final Showdown", link: "https://www.youtube.com/watch?v=NfcHsANVjaw" },
  { name: "Swordsman World", link: "https://www.youtube.com/watch?v=YIBPxsnDgfc" },
  { name: "Chosen Guard", link: "https://www.youtube.com/watch?v=Qs96BnLHCLU" },
  { name: "Hardest Punch", link: "https://www.youtube.com/watch?v=u-muXaxNrTY" },
  { name: "Legend of Swords", link: "https://www.youtube.com/watch?v=VAixrTTWR2g" },
  { name: "Mrutyu Ka Devta", link: "https://www.youtube.com/watch?v=183myNTuLAQ" },
  { name: "Kung Fu Boys 2", link: "https://www.youtube.com/watch?v=be_9CW2aokk" },
  { name: "Kung Fu Killer", link: "https://www.youtube.com/watch?v=5_HM7rht1N4" },
  { name: "King Of Yuan", link: "https://www.youtube.com/watch?v=fkaaVo7p-Pw" },
  { name: "Kungfu Boys", link: "https://www.youtube.com/watch?v=qL5Jiyx0iok" },
  { name: "Mission Bravo", link: "https://www.youtube.com/watch?v=6pUi4AHWt6A" },
  { name: "Legends of Ancient Sword", link: "https://www.youtube.com/watch?v=ZIhInVJDeO4" },
  { name: "War of Legends", link: "https://www.youtube.com/watch?v=6j07gFkcVGE" },
  { name: "THE UNBEATEN BOXER", link: "https://www.youtube.com/watch?v=ry6JuJKjhmw" },
  { name: "Ordinary Man", link: "https://www.youtube.com/watch?v=nDs4uT7WGoE" },
  { name: "Nine Guardians", link: "https://www.youtube.com/watch?v=rlAY1vqgke8" },
  { name: "IRON BLADES", link: "https://www.youtube.com/watch?v=mVNWHLZE3io" },
  { name: "The Secret of Princess", link: "https://www.youtube.com/watch?v=toPaS-nmaLI" },
  { name: "Damocles", link: "https://www.youtube.com/watch?v=P3O7zrzz47U" },
  { name: "Assassin's Wrath", link: "https://www.youtube.com/watch?v=OTPQqiq-d0o" },
  { name: "Hopeless Situation", link: "https://www.youtube.com/watch?v=8OZjbUR1hMc" },
  { name: "The Fated King", link: "https://www.youtube.com/watch?v=hvF7ISoutPE" },
  { name: "Nine Guardians 2", link: "https://www.youtube.com/watch?v=55IZG_d2XLg" },
  { name: "The King of Zhuanyu", link: "https://www.youtube.com/watch?v=GZeMfKO-Neo" },
  { name: "Crazy Buddha", link: "https://www.youtube.com/watch?v=yMkJo92kNQc" },
  { name: "Martial World", link: "https://www.youtube.com/watch?v=xB4l_EWYxQ4" },
  { name: "Heart Hunter Bone Evidence", link: "https://www.youtube.com/watch?v=jdkGGnScEwo" },
  { name: "Royal Escort", link: "https://www.youtube.com/watch?v=T7INw2qQpRg" },
  { name: "Southern Wing Chun", link: "https://www.youtube.com/watch?v=Zks08Jf5AVk" },
  { name: "Great Wall Warriors", link: "https://www.youtube.com/watch?v=kn8sQQVBTNM" },
  { name: "Southern Wing Chun 2", link: "https://www.youtube.com/watch?v=8xCXOOq4em8" },
  { name: "Heaven Eyes", link: "https://www.youtube.com/watch?v=uo_f8JTHa-s" },
  { name: "Celestial Clan", link: "https://www.youtube.com/watch?v=xarLKBUmnmw" },
  { name: "Rage & Romance", link: "https://www.youtube.com/watch?v=jTAWX9b0bBs" },
  { name: "Celestial Clan Part 2", link: "https://www.youtube.com/watch?v=c6PyJQM4JWo" },
  { name: "Shuriken's Mystery", link: "https://www.youtube.com/watch?v=DD2fx-P7cfs" },
  { name: "Celestial Clan 3", link: "https://www.youtube.com/watch?v=cEMAsapLM7E" },
  { name: "Wolf's Tooth", link: "https://www.youtube.com/watch?v=cavWah85034" },
  { name: "Anti-Bio Agent", link: "https://www.youtube.com/watch?v=hNivxP8JG6s" },
  { name: "Thunder Blade", link: "https://www.youtube.com/watch?v=6_WOH6MVSuA" },
  { name: "Secret of Poison", link: "https://www.youtube.com/watch?v=3Vd-Ug-qMaw" },
  { name: "One Punch Man", link: "https://www.youtube.com/watch?v=TO12KBpss7M" },
  { name: "Chinese Beasts", link: "https://www.youtube.com/watch?v=73YTc8wx7uc" },
  { name: "Dragon Fist", link: "https://www.youtube.com/watch?v=Sj-5ZVb2AhI" },
  { name: "Shadow Sword Art", link: "https://www.youtube.com/watch?v=BRyKo3J6b6I" },
  { name: "Final Fist Showdown", link: "https://www.youtube.com/watch?v=WmZP1PYOQQ8" },
  { name: "Wind Blade", link: "https://www.youtube.com/watch?v=sSTbOXIpa78" },
  { name: "Heavenly Guard", link: "https://www.youtube.com/watch?v=_J06E3Kf9FE" },
  { name: "Powerful Fist", link: "https://www.youtube.com/watch?v=r9D1kqLic6Q" },
  { name: "Ultimate Swordsmen", link: "https://www.youtube.com/watch?v=VjlnInkY6Fw" },
  { name: "Adventure of Princess", link: "https://www.youtube.com/watch?v=HoTpTPCRW3M" },
  { name: "God of Death", link: "https://www.youtube.com/watch?v=ZN2W-1mJaQQ" },
  { name: "Lost Seal of Vengeance", link: "https://www.youtube.com/watch?v=fRgCl7MaatA" },
  { name: "Empire Hidden Truth Part 1 & 2", link: "https://www.youtube.com/watch?v=XlvUITBhFMo" },
  { name: "Shaolin Grandmaster Part 1 & 2", link: "https://www.youtube.com/watch?v=WesHJV_qjUM" },
  { name: "Unchained Fighter 1 & 2", link: "https://www.youtube.com/watch?v=00uK-F6CIuk" },
  { name: "Sword Wrath", link: "https://www.youtube.com/watch?v=2f-GIsRlaL8" },
  { name: "The Legend Awakens", link: "https://www.youtube.com/watch?v=2e9zTHtYKo4" },
  { name: "Iron Strike", link: "https://www.youtube.com/watch?v=8j2DKSEswKE" },
  { name: "Thunder Blade", link: "https://www.youtube.com/watch?v=eGgQWbStfcE" },
  { name: "Legends of Ancient Sword", link: "https://www.youtube.com/watch?v=_XeZkmExKqc" },
  { name: "Kingdom Of Warriors", link: "https://www.youtube.com/watch?v=rA7kDOLEbWM" },
  { name: "The King of War", link: "https://www.youtube.com/watch?v=yzp8LbbM5gs" },
  { name: "Mystery Exposed", link: "https://www.youtube.com/watch?v=xuR7EKCXfNA" },
  { name: "Ultimate Battle", link: "https://www.youtube.com/watch?v=sBbKL1zTB2o" },
  { name: "King Zoro", link: "https://www.youtube.com/watch?v=mbnlwKmFMYQ" },
  { name: "War of Legends", link: "https://www.youtube.com/watch?v=bN4X2qtf4cw" },
  { name: "The Heavenly Clan", link: "https://www.youtube.com/watch?v=CpqYupT1J5g" },
  { name: "The Heavenly Clan", link: "https://www.youtube.com/watch?v=NOm7NF6ej_0" },
  { name: "Sword God Part 1 & 2", link: "https://www.youtube.com/watch?v=giVdzDE4vjM" },
  { name: "Chaos Blade 1 & 2", link: "https://www.youtube.com/watch?v=Ktu0sqCqgEc" },
  { name: "KILL THEM ALL", link: "https://www.youtube.com/watch?v=5NSUfy_aOYs" },
  { name: "The Martial Guard", link: "https://www.youtube.com/watch?v=fAMqDzGNZKw" },
  { name: "The Imperium Part 1 & 2", link: "https://www.youtube.com/watch?v=x78zb8IycKc" },
  { name: "Game Of Death", link: "https://www.youtube.com/watch?v=Ow4X1zKPHBA" },
  { name: "Blood Warriors", link: "https://www.youtube.com/watch?v=frEwTUqLloM" },
  { name: "The Forbidden Art", link: "https://www.youtube.com/watch?v=847AqzG75fs" },
  { name: "Dragon Entrance", link: "https://www.youtube.com/watch?v=wsOvV27qMII" },
  { name: "Hearts at War", link: "https://www.youtube.com/watch?v=rMv4kldFuYY" },
  { name: "King Of Sword", link: "https://www.youtube.com/watch?v=1qZfA2rUiqk" },
  { name: "The Silent Assassin", link: "https://www.youtube.com/watch?v=6YXAXs0IFsA" },
  { name: "The Legend of Muay Thai : Nine Satra", link: "https://www.youtube.com/watch?v=I3znTXRhZqM" },
  { name: "Son of the Sword", link: "https://www.youtube.com/watch?v=FuzI6ZE0Fjw" },
  { name: "The Token & The Secret Woman", link: "https://www.youtube.com/watch?v=ebl-dURK2wc" },
];

chineseMovies.forEach(card => cardData.push({ ...card, language: "Hindi", category: "Chinese Movie", type: "video" }));
animeSubbed.forEach(card => cardData.push({ ...card, language: "Subbed", category: "Anime Subbed", type: "video" }));

// Helper to get YouTube thumbnail from a video URL
function getYoutubeThumbnail(url) {
  const match = url.match(/(?:youtu.be\/|youtube.com\/(?:watch\?v=|embed\/|v\/|shorts\/|playlist\?list=[^&]+&index=)?)([\w-]{11})/);
  if (match && match[1]) {
    return `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`;
  }
  return "https://i.imgur.com/6M513yQ.png"; // fallback
}



const ConfirmationDialog = ({ show, onConfirm, onCancel }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="confirmation-dialog-overlay">
      <div className="confirmation-dialog-content">
        <p>Do you want to watch this ad to unlock this link?</p>
        <div className="confirmation-dialog-buttons">
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  );
};





function Preloader() {
  return (
    <div className="preloader-overlay">
      <img src={preloaderGif} alt="Loading..." className="preloader-img" />
    </div>
  );
}

function Card({ card, playlistThumbnails }) {
  const playlistThumb = playlistThumbnails[card.link];
  const [showFallback, setShowFallback] = useState(false);
  const cardRef = useRef();
  const [visible, setVisible] = useState(false);
  const [unlocked, setUnlocked] = useState(
    sessionStorage.getItem(`card-unlocked-${card.name}`) === "true"
  );
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const handleCardClick = (e) => {
    if (!unlocked && card.link !== "/naruto") {
      e.preventDefault();
      setShowConfirmation(true);
    }
  };

  const handleConfirm = () => {
    setShowConfirmation(false);
    window.open("https://www.profitableratecpm.com/cep97pk4?key=c6d02e5e2428027039f5b8839ead4161", "_blank");
    sessionStorage.setItem(`card-unlocked-${card.name}`, "true");
    setUnlocked(true);
  };

  const handleCancel = () => {
    setShowConfirmation(false);
  };

  if (card.link.startsWith('/')) {
    return (
      <Link
        to={card.link}
        className={`card${visible ? " card-visible" : ""} ${unlocked ? "unlocked" : ""}`}
        data-language={card.language}
        data-category={card.category}
        ref={cardRef}
        tabIndex={0}
        aria-label={card.name}
        onMouseDown={e => e.currentTarget.classList.add("card-pressed")}
        onMouseUp={e => e.currentTarget.classList.remove("card-pressed")}
        onMouseLeave={e => e.currentTarget.classList.remove("card-pressed")}
        onClick={handleCardClick}
      >
        <div className="card-thumb">
          <img src={card.thumbnail} alt={card.name + " thumbnail"} />
        </div>
        <div className="card-info">
          <div className="card-title">{card.name}</div>
          <div className="card-tags">
            <span className="card-tag lang">{card.language}</span>
            <span className="card-tag cat">{card.category}</span>
          </div>
        </div>
      </Link>
    );
  }

  let thumbnail = "";
  if (card.type === "video") {
    thumbnail = getYoutubeThumbnail(card.link);
  } else if (card.type === "playlist") {
    thumbnail = playlistThumb;
  }
  return (
    <a
      className={`card${visible ? " card-visible" : ""} ${unlocked ? "unlocked" : ""}`}
      href={card.link}
      target="_blank"
      rel="noopener noreferrer"
      data-language={card.language}
      data-category={card.category}
      ref={cardRef}
      tabIndex={0}
      aria-label={card.name}
      onMouseDown={e => e.currentTarget.classList.add("card-pressed")}
      onMouseUp={e => e.currentTarget.classList.remove("card-pressed")}
      onMouseLeave={e => e.currentTarget.classList.remove("card-pressed")}
      onClick={handleCardClick}
    >
      <div className="card-thumb">
        {thumbnail ? (
          <img
            src={showFallback ? "https://i.imgur.com/6M513yQ.png" : thumbnail}
            alt={card.name + " thumbnail"}
            onError={() => setShowFallback(true)}
          />
        ) : (
          <div style={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#222"}}>
            <span style={{color: "#00ff41", fontWeight: 600}}>Loading...</span>
          </div>
        )}
      </div>
      <div className="card-info">
        <div className="card-title">{card.name}</div>
        <div className="card-tags">
          <span className="card-tag lang">{card.language}</span>
          <span className="card-tag cat">{card.category}</span>
        </div>
      </div>
      <ConfirmationDialog
        show={showConfirmation}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </a>
  );
}

function groupByCategory(cards) {
  const grouped = {};
  cards.forEach(card => {
    const cat = card.category || "Other";
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(card);
  });
  return grouped;
}

const MemoizedCard = React.memo(Card);

function CardGrid({ cards, searchActive }) {
  // Per-category load more state
  const [visibleCount, setVisibleCount] = React.useState({});
  const DEFAULT_COUNT = 8;
  const LOAD_MORE_COUNT = 8;

  useEffect(() => {
    // Reset visibleCount when cards or search changes
    setVisibleCount({});
  }, [cards, searchActive]);

  const grouped = groupByCategory(cards);
  const categories = Object.keys(grouped);

  function handleLoadMore(cat) {
    setVisibleCount(prev => ({
      ...prev,
      [cat]: (prev[cat] || DEFAULT_COUNT) + LOAD_MORE_COUNT
    }));
  }

  return (
    <div className="card-grid-categories">
      {categories.map(cat => {
        const allCards = grouped[cat];
        const showAll = searchActive;
        const count = showAll ? allCards.length : (visibleCount[cat] || DEFAULT_COUNT);
        const visibleCards = allCards.slice(0, count);
        return (
          <div key={cat} className="card-category-block">
            <h2 className="card-category-title">{cat}</h2>
            <div className="card-grid">
              {visibleCards.map((card, idx) => (
                <MemoizedCard card={card} key={card.name + idx} playlistThumbnails={playlistThumbnails} />
              ))}
            </div>
            {!showAll && allCards.length > count && (
              <button className="load-more-btn" onClick={() => handleLoadMore(cat)}>
                Load More
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/naruto" element={<NarutoPage />} />
      </Routes>
    </Router>
  );
}

function MainApp() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [heroSearch, setHeroSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [playlistThumbnails, setPlaylistThumbnails] = useState({});

  useEffect(() => {
    async function fetchAllPlaylistThumbs() {
      const playlistCards = cardData.filter(card => card.type === 'playlist');
      const thumbPromises = playlistCards.map(card =>
        fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(card.link)}&format=json`)
          .then(res => (res.ok ? res.json() : Promise.reject('oEmbed failed')))
          .then(data => ({ [card.link]: data.thumbnail_url }))
          .catch(() => ({ [card.link]: "https://i.imgur.com/6M513yQ.png" }))
      );
      const thumbs = await Promise.all(thumbPromises);
      setPlaylistThumbnails(Object.assign({}, ...thumbs));
    }
    fetchAllPlaylistThumbs();
  }, []);
  

  useEffect(() => {
    // Simulate loading for preloader
    const timer = setTimeout(() => setLoading(false), 1200);
    // Prevent scroll when loading
    if (loading) {
      document.body.classList.add('preloader-active');
    } else {
      document.body.classList.remove('preloader-active');
    }
    return () => {
      document.body.classList.remove('preloader-active');
      clearTimeout(timer);
    };
  }, [loading]);

  // All unique categories for nav
  const navCategories = [
    { label: "Home", value: "All" },
    { label: "Anime", value: "Anime" },
    { label: "Movies", value: "Anime Movie" },
    { label: "Kdrama", value: "K Drama" },
    { label: "Bollywood", value: "Bollywood" },
    { label: "Chinese Movie", value: "Chinese Movie" },
  ];

  // Filtering logic
  function filterCards(cards, searchTerm, category) {
    return cards.filter(card => {
      const matchesSearch =
        card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.language.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        category === "All" ||
        (category === "Anime" && (card.category === "Anime Hindi" || card.category === "Anime Subbed" || card.category === "Anime Movie")) ||
        card.category === category;
      return matchesSearch && matchesCategory;
    });
  }

  // Which search bar is active?
  const effectiveSearch = search || heroSearch;
  const filteredCards = filterCards(cardData, effectiveSearch, category);

  // Handlers
  function handleNavCategory(cat) {
    setCategory(cat);
    setSearch("");
    setHeroSearch("");
    setMenuOpen(false);
  }

  function handleSearch(e) {
    setSearch(e.target.value);
    setHeroSearch("");
  }
  function handleHeroSearch(e) {
    setHeroSearch(e.target.value);
    setSearch("");
  }
  function handleSearchSubmit(e) {
    e.preventDefault();
  }

  

  if (loading) return <Preloader />;

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            <img src={logoPng} alt="Logo" className="navbar-logo-img" />
            Link<span>Verse</span>
          </div>
          <div className="navbar-spacer" />
          {/* Desktop Menu */}
          <div className="navbar-links">
            {navCategories.map(nav => (
              <button
                key={nav.value}
                className={`navbar-link${category === nav.value ? " active" : ""}`}
                onClick={() => handleNavCategory(nav.value)}
              >
                {nav.label}
              </button>
            ))}
          </div>
          {/* Burger Button */}
          <div
            className={`burger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            tabIndex={0}
            role="button"
            onKeyPress={e => { if (e.key === 'Enter') setMenuOpen(!menuOpen); }}
          >
            <span className="bar bar1"></span>
            <span className="bar bar2"></span>
            <span className="bar bar3"></span>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
          {navCategories.map(nav => (
            <button
              key={nav.value}
              className={`navbar-link${category === nav.value ? " active" : ""}`}
              onClick={() => handleNavCategory(nav.value)}
            >
              {nav.label}
            </button>
          ))}
        </div>
      </nav>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <h1 className="hero-title">Link to Everything</h1>
          <div className="hero-subtitle">Anime &nbsp; Movies &nbsp; TV Series &nbsp; Kdrama</div>
          <form className="hero-search-bar" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search anything..."
              value={heroSearch}
              onChange={handleHeroSearch}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </section>
      {/* Card Grid Section */}
      <section className="card-section">
        <CardGrid cards={filteredCards} searchActive={!!effectiveSearch} />
      </section>
      
    </div>
  );
}

export default App;