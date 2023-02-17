

import { pool } from "../database.js";
const express = require('express')
const mysql = require('mysql')
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'caawiye'
});



export const renderAddLink = (req, res) => {
  res.render("links/add");
};

const addlink =async (req, res) =>{
  const {name,amount,tixraac_no,phone,cash_type} = req.body;
  const newLink ={
    name,
    amount,
    tixraac_no,
    phone,
    cash_type,
  }
  await db.query("INSERT INTO clients set ?",[newLink]);
  req.flash("succes ","Link saved Succesfully")
res.redirect("/donationForm");
 }
 
// export const addLink = async (req, res) => {
//   const { title, url, description } = req.body;
//   const newLink = {
//     title,
//     url,
//     description,
//     user_id: req.user.id,
//   };
//   await pool.query("INSERT INTO links set ?", [newLink]);
//   req.flash("success", "Link Saved Successfully");
//   res.redirect("/links");
// };

// export const renderLinks = async (req, res) => {
//   const [rows] = await pool.query("SELECT * FROM links WHERE user_id = ?", [
//     req.user.id,
//   ]);
//   res.render("links/list", { links: rows });
// };

// export const deleteLink = async (req, res) => {
//   const { id } = req.params;
//   await pool.query("DELETE FROM links WHERE ID = ?", [id]);
//   req.flash("success", "Link Removed Successfully");
//   res.redirect("/links");
// };

// export const renderEditLink = async (req, res) => {
//   const { id } = req.params;
//   const [rows] = await pool.query("SELECT * FROM links WHERE id = ?", [id]);
//   res.render("links/edit", { link: rows[0] });
// };

// export const editLink = async (req, res) => {
//   const { id } = req.params;
//   const { title, description, url } = req.body;
//   const newLink = {
//     title,
//     description,
//     url,
//   };
//   await pool.query("UPDATE links set ? WHERE id = ?", [newLink, id]);
//   req.flash("success", "Link Updated Successfully");
//   res.redirect("/links");
// };