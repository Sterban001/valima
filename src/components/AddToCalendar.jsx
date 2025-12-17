import React from 'react';
import { CalendarPlus } from 'lucide-react';
import { motion } from 'framer-motion';

const AddToCalendar = () => {
    const handleGoogleCalendar = () => {
        const title = encodeURIComponent("Valima Ceremony: Basharath & Rafath");
        const details = encodeURIComponent("Please join us for the Valima Ceremony of Mohammed Basharath Ali and Rafath Unnisa.");
        const location = encodeURIComponent("Pista House Banquet Hall, Shah Ali Banda, Hyderabad");
        // 9:00 PM IST is 15:30 UTC
        const start = "20260107T153000Z";
        // 23:59 PM IST is 18:29 UTC
        const end = "20260107T182900Z";

        const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${start}/${end}`;
        window.open(url, '_blank');
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-8"
        >
            <button
                onClick={handleGoogleCalendar}
                className="flex items-center justify-center gap-2 mx-auto bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition-all shadow-lg hover:shadow-xl"
            >
                <CalendarPlus className="w-5 h-5" />
                <span>Save to Google Calendar</span>
            </button>
        </motion.div>
    );
};

export default AddToCalendar;
