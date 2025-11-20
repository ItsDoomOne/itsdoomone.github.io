#!/bin/bash

echo "valinhos42" | sudo -S pacman -Sy --needed --noconfirm onboard
onboard &
