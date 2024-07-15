const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { sendReferralEmail } = require('../services/emailService');

exports.createReferral = async (req, res) => {
  const { referrerName, referrerEmail, refereeName, refereeEmail } = req.body;

  if (!referrerName || !referrerEmail || !refereeName || !refereeEmail) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newReferral = await prisma.referral.create({
      data: {
        referrerName,
        referrerEmail,
        refereeName,
        refereeEmail,
      },
    });

    await sendReferralEmail(referrerEmail, refereeEmail);

    res.status(201).json(newReferral);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};