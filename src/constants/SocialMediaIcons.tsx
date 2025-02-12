/* eslint-disable react/jsx-key */
import Link from 'next/link'
import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'
import { FaGithub, FaXTwitter } from 'react-icons/fa6'

export const SocialMediaIcons = [
   <Link href="/">{<FaXTwitter />}</Link>,
   <Link href="/">{<BsYoutube />}</Link>,
   <Link href="/">{<BsFacebook />}</Link>,
   <Link href="/">{<BsInstagram />}</Link>,
   <Link href="/">{<BsLinkedin />}</Link>,
   <Link href="/">{<FaGithub />}</Link>,
]
