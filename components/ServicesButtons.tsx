"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"



export default function AnimatedCards() {
  const [activeButton, setActiveButton] = useState<number | null>(null)

  const handleButtonClick = (buttonNumber: number) => {
    // If the same button is clicked again, toggle it off
    if (activeButton === buttonNumber) {
      setActiveButton(null)
    } else {
      setActiveButton(buttonNumber)
    }
  }

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex flex-wrap gap-32 -ml-24 justify-center">
        <Button
          variant={activeButton === 1 ? "default" : "outline"}
          onClick={() => handleButtonClick(1)}
          className="px-10 py-4 rounded-full cursor-pointer border-0 text-black bg-white shadow-md text-lg tracking-wider uppercase transition-all duration-500 ease-in-out hover:tracking-widest hover:bg-blue-500 hover:text-white hover:shadow-blue-950 active:translate-y-2 active:shadow-none"
        >
          Investment and Research Services
        </Button>
        <Button
          variant={activeButton === 2 ? "default" : "outline"}
          onClick={() => handleButtonClick(2)}
          className="px-10 py-4 rounded-full cursor-pointer text-black border-0 bg-white shadow-md text-lg tracking-wider uppercase transition-all duration-500 ease-in-out hover:tracking-widest hover:bg-blue-950 hover:text-white hover:shadow-blue-950 active:translate-y-2 active:shadow-none"
        >
          CFO Services (SME)
        </Button>
      </div>

      <AnimatePresence mode="wait">
        {activeButton === 1 && (
          <motion.div
            key="twoCards"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <Card className="h-[500px] bg-blue-500 text-white">
                <CardHeader>
                  <CardTitle>First Big Card</CardTitle>
                  <CardDescription>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md flex items-center justify-center">
                    <p className="text-2xl font-bold">Card 1</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <p>Additional information for card 1</p>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Card className="h-[500px] bg-blue-500 text-white">
                <CardHeader>
                  <CardTitle>Second Big Card</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="  rounded-md flex items- justify-center">
                    <p className="text-2xl font-bold">Card 2</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <p>Additional information for card 2</p>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        )}

        {activeButton === 2 && (
          <motion.div
            key="oneCard"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
              <Card className="bg-blue-950 text-white">
                <CardHeader>
                  <CardTitle>One Big Card</CardTitle>
                  <CardDescription>This is a single big card</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-60 rounded-md flex items-center justify-center">
                    <p className="text-3xl font-bold">Single Card</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <p>Additional information for the single card</p>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

