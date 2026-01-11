export async function sendDiscordNotification(
  name: string,
  phone: string,
  message: string
): Promise<boolean> {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error('Discord webhook URL not configured');
    return false;
  }

  const now = new Date();
  const timestamp = now.toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });

  const embed = {
    embeds: [
      {
        title: '📩 새로운 문의가 접수되었습니다!',
        color: 0x6366f1,
        fields: [
          {
            name: '👤 이름',
            value: name,
            inline: true,
          },
          {
            name: '📞 전화번호',
            value: phone,
            inline: true,
          },
          {
            name: '💬 상담문의',
            value: message,
            inline: false,
          },
        ],
        footer: {
          text: `페이지하우스 | ${timestamp}`,
        },
        timestamp: now.toISOString(),
      },
    ],
  };

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(embed),
    });

    return response.ok;
  } catch (error) {
    console.error('Failed to send Discord notification:', error);
    return false;
  }
}
