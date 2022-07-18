RegisterNUICallback('OnDuty', function(data, cb)
    print("Você entrou em serviço.")
    print(data.creator .. " lindo")

    cb("ok")
end)

RegisterNUICallback('OffDuty', function(data, cb)
    print("Você saiu de serviço.")
    print(data.creator .. " lindo")

    cb("ok")
end)

RegisterNUICallback('CloseSystem', function(data, cb)
    print("Você fechou o sistema. ")
    print(data.creator .. " lindo")

    cb("ok")
end)


Citizen.CreateThread(function() 
    SetNuiFocus(true,true)
end)